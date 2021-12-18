import React, { ReactElement, useState } from 'react';

import I18n from '@iobroker/adapter-react/i18n';
import { Box, Grid, Tab, Tabs } from '@material-ui/core';

import { AddRemoveElements } from './AddRemoveElements';
import { MySelect } from './MySelect';
import { MyTextField } from './MyTextField';
import { MyUpload } from './MyUpload';
import { TabPanel } from './Tabpanel';

interface SettingsProps {
  native: ioBroker.AdapterConfig;
  onNativeChange: (attr: string, value: unknown) => void;
}

export const Settings = ({ native, onNativeChange }: SettingsProps): ReactElement => {
  const [actualTab, setActualTab] = useState<string>('required');

  return (
    <>
      <Tabs value={actualTab} onChange={(e, newValue) => setActualTab(newValue)}>
        <Tab label={I18n.t('requiredTab')} value="required" />
        <Tab label={I18n.t('optionalTab')} value="optional" />
      </Tabs>
      <TabPanel panelId="required" activePanelId={actualTab}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item>
              <MySelect
                attribute="beckhoffRuntimeType"
                title="beckhoffRuntimeType"
                native={native}
                onNativeChange={onNativeChange}
                options={[
                  { title: 'beckhoffRuntimeTypeOption0', value: 0 },
                  { title: 'beckhoffRuntimeTypeOption1', value: 1 },
                  { title: 'beckhoffRuntimeTypeOption2', value: 2 },
                ]}
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="targetIPAddress"
                title="targetIPAddress"
                native={native}
                onNativeChange={onNativeChange}
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="targetAMSNetID"
                title="targetAMSNetID"
                native={native}
                onNativeChange={onNativeChange}
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="targetAMSPort"
                title="targetAMSPort"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="targetTCPPort"
                title="targetTCPPort"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item>
              <AddRemoveElements
                attribute="targetVariableTables"
                title="targetVariableTables"
                native={native}
                onNativeChange={onNativeChange}
              />
            </Grid>
            {native.beckhoffRuntimeType === 2 && (
              <Grid item>
                <MyUpload attribute="tpyFile" title="tpyFile" native={native} onNativeChange={onNativeChange} />
              </Grid>
            )}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel panelId="optional" activePanelId={actualTab}>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item>
              <MyTextField
                attribute="adapterAMSNetID"
                title="adapterAMSNetID"
                native={native}
                onNativeChange={onNativeChange}
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="adapterAMSPort"
                title="adapterAMSPort"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="adapterTCPPort"
                title="adapterTCPPort"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="timeout"
                title="timeout"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
            <Grid item>
              <MyTextField
                attribute="reconnectInterval"
                title="reconnectInterval"
                native={native}
                onNativeChange={onNativeChange}
                type="number"
              />
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </>
  );
};
