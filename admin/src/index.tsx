import React from 'react';

import Utils from '@iobroker/adapter-react/Components/Utils';
import theme from '@iobroker/adapter-react/Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

import App from './App';

let themeName = Utils.getThemeName();

function build(): void {
  ReactDOM.render(
    <MuiThemeProvider theme={theme(themeName)}>
      <App
        adapterName="beckhoff-automation"
        onThemeChange={_theme => {
          themeName = _theme;
          build();
        }}
      />
    </MuiThemeProvider>,
    document.getElementById('root')
  );
}

build();
