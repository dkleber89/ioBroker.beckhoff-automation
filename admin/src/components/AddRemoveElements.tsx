import React, { ReactElement, useCallback, useState } from 'react';

import I18n from '@iobroker/adapter-react/i18n';
import { Box, Button, IconButton, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Delete as DeleteIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 7,
    marginBottom: 5,
    minWidth: 400,
  },
  items: {
    '&:not(&:last-child)': {
      borderBottom: '1px solid black',
    },
  },
}));

interface AddRemoveElementsProps {
  title: AdminWord;
  attribute: keyof ioBroker.AdapterConfig;
  native: ioBroker.AdapterConfig;
  onNativeChange: (attr: string, value: string[]) => void;
  error?: boolean;
  helperText?: string;
}

export const AddRemoveElements = ({
  title,
  attribute,
  native,
  onNativeChange,
  error,
  helperText,
}: AddRemoveElementsProps): ReactElement => {
  const styles = useStyles();
  const [newElement, setNewElement] = useState('');

  const save = useCallback(() => {
    if (!(native[attribute] as string[]).includes(newElement)) {
      onNativeChange(attribute, (native[attribute] as string[]).concat(newElement));
    }

    setNewElement('');
  }, [native[attribute], attribute, newElement]);

  return (
    <Box display="inline-flex" flexDirection="column" className={styles.root}>
      <Box display="flex" alignItems="center">
        <TextField
          label={I18n.t(title)}
          type="text"
          value={newElement}
          onChange={e => setNewElement(e.target.value)}
          fullWidth
          error={error}
          helperText={helperText}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              save();
            }
          }}
        />
        <Box p={1} />
        <Button
          color="primary"
          variant="contained"
          onClick={save}
          disabled={newElement === '' || (native[attribute] as string[]).includes(newElement)}
        >
          {I18n.t('add')}
        </Button>
      </Box>
      {native[attribute] &&
        (native[attribute] as string[]).map((element, index) => {
          return (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              className={styles.items}
              key={`vTableItem-${index}`}
            >
              <Box paddingLeft={1}>{element}</Box>
              <IconButton
                onClick={() => {
                  onNativeChange(
                    attribute,
                    (native[attribute] as string[]).filter(arrayElement => arrayElement !== element)
                  );
                }}
                color="secondary"
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        })}
    </Box>
  );
};
