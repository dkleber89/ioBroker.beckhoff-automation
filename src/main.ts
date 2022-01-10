import * as utils from '@iobroker/adapter-core';

import { Beckhoff } from './Beckhoff';

class BeckhoffAutomation extends utils.Adapter {
  private _beckhoff: Beckhoff | null = null;

  public constructor(options: Partial<utils.AdapterOptions> = {}) {
    super({
      ...options,
      name: 'beckhoff-automation',
    });
    this.on('ready', this.onReady.bind(this));
    this.on('stateChange', this.onStateChange.bind(this));
    this.on('objectChange', this.onObjectChange.bind(this));
    this.on('unload', this.onUnload.bind(this));
  }

  /**
   * Is called when databases are connected and adapter received configuration.
   */
  private async onReady(): Promise<void> {
    // Initialize your adapter here
    this.setState('info.connection', false, true); // Reset the connection indicator during startup

    // Preparations
    await this.createDeviceAsync('plc');
    const channels = await this.getChannelsOfAsync('plc');

    // Delete unneccessary channels
    channels.forEach(channel => {
      // eslint-disable-next-line no-underscore-dangle
      if (!this.config.targetVariableTables.includes(channel._id)) {
        // eslint-disable-next-line no-underscore-dangle
        this.deleteChannelAsync(channel._id);
      }
    });

    // Start Beckoff
    this._beckhoff = new Beckhoff(this);

    // Subscribe all States in plc channel
    this.subscribeStates('plc.*');
  }

  /**
   * Is called when adapter shuts down - callback has to be called under any circumstances!
   */
  private async onUnload(callback: () => void): Promise<void> {
    try {
      this._beckhoff?.killAll();

      callback();
    } catch (e) {
      const error = e as Error;

      this.log.error(error.message);

      callback();
    }
  }

  // If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
  // You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
  /**
   * Is called if a subscribed object changes
   */
  private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
    if (obj) {
      // The object was changed
      this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
    } else {
      // The object was deleted
      this.log.info(`object ${id} deleted`);
    }
  }

  /**
   * Is called if a subscribed state changes
   */
  private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
    if (state) {
      // The state was changed
      this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
    } else {
      // The state was deleted
      this.log.info(`state ${id} deleted`);
    }
  }

  // If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
  // /**
  //  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
  //  * Using this method requires "common.messagebox" property to be set to true in io-package.json
  //  */
  // private onMessage(obj: ioBroker.Message): void {
  //     if (typeof obj === 'object' && obj.message) {
  //         if (obj.command === 'send') {
  //             // e.g. send email or pushover or whatever
  //             this.log.info('send command');

  //             // Send response in callback if required
  //             if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
  //         }
  //     }
  // }
}

if (require.main !== module) {
  // Export the constructor in compact mode
  module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new BeckhoffAutomation(options);
} else {
  // otherwise start the instance directly
  (() => new BeckhoffAutomation())();
}
