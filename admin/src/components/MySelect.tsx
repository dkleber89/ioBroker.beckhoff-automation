import React, { ReactElement } from 'react';

import I18n from '@iobroker/adapter-react/i18n';
import { FormControl, FormHelperText, Input, makeStyles, MenuItem, Select } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 400,
  },
}));

interface MySelectProps {
  title: AdminWord;
  attribute: keyof ioBroker.AdapterConfig;
  native: ioBroker.AdapterConfig;
  onNativeChange: (attr: string, value: unknown) => void;
  options: { value: string | number; title: AdminWord }[];
  error?: boolean;
  helperText?: string;
}

export const MySelect = ({
  title,
  attribute,
  native,
  onNativeChange,
  options,
  error,
  helperText,
}: MySelectProps): ReactElement => {
  const styles = useStyles();

  return (
    <FormControl className={styles.root} error={error}>
      <FormHelperText>{I18n.t(title)}</FormHelperText>
      <Select
        value={native[attribute]}
        onChange={e => onNativeChange(attribute, e.target.value)}
        input={<Input name={attribute} id={`${attribute}-helper`} />}
      >
        {options.map(item => (
          <MenuItem key={`key-${item.value}`} value={item.value}>
            {I18n.t(item.title)}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};
