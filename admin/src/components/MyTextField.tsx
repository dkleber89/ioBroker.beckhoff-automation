import React, { ReactElement } from 'react';

import I18n from '@iobroker/adapter-react/i18n';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 7,
    marginBottom: 5,
    minWidth: 400,
  },
}));

interface TextFieldProps {
  title: AdminWord;
  attribute: keyof ioBroker.AdapterConfig;
  native: ioBroker.AdapterConfig;
  onNativeChange: (attr: string, value: string | number) => void;
  type?: 'text' | 'number';
  error?: boolean;
  helperText?: string;
}

export const MyTextField = ({
  title,
  attribute,
  native,
  onNativeChange,
  type = 'text',
  error,
  helperText,
}: TextFieldProps): ReactElement => {
  const styles = useStyles();

  return (
    <TextField
      label={I18n.t(title)}
      className={styles.root}
      type={type}
      value={native[attribute]}
      onChange={e => onNativeChange(attribute, e.target.value)}
      margin="normal"
      error={error}
      helperText={helperText}
    />
  );
};
