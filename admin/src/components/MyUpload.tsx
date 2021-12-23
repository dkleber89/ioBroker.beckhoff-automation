import React, { ReactElement, useMemo } from 'react';

import I18n from '@iobroker/adapter-react/i18n';
import { Box, Button, FormControl, FormHelperText, IconButton, makeStyles } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { parseString } from 'xml2js';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 14,
    marginBottom: 5,
    minWidth: 400,
  },
  uploadButton: {
    '& span': { fontSize: '1em' },
  },
}));

interface UploadProps {
  title: AdminWord;
  attribute: keyof ioBroker.AdapterConfig;
  native: ioBroker.AdapterConfig;
  onNativeChange: (attr: string, value: ioBroker.TpyFile | null) => void;
  error?: boolean;
  helperText?: string;
}

export const MyUpload = ({
  title,
  attribute,
  native,
  onNativeChange,
  error,
  helperText,
}: UploadProps): ReactElement => {
  const styles = useStyles();

  const fileName = useMemo(() => {
    if (native[attribute]) {
      const tpyFile = native[attribute] as ioBroker.TpyFile;

      return tpyFile.name;
    }

    return undefined;
  }, [native, attribute]);

  return (
    <FormControl className={styles.root} error={error}>
      <label htmlFor="contained-button-file">
        <input
          accept=".tpy"
          id="contained-button-file"
          type="file"
          hidden
          onChange={event => {
            const file = event.target.files?.[0];

            if (file) {
              const fileReader = new FileReader();

              fileReader.onload = ev => {
                // Parse String only for check
                parseString(
                  ev.target?.result || '',
                  {
                    normalize: true,
                  },
                  err => {
                    if (err) {
                      onNativeChange(attribute, null);
                    } else {
                      onNativeChange(attribute, { name: file.name, data: ev.target?.result as string });
                    }
                  }
                );
              };

              fileReader.onerror = () => {
                onNativeChange(attribute, null);
              };

              fileReader.readAsText(file, 'UTF-8');
            } else {
              onNativeChange(attribute, null);
            }
          }}
        />
        <Button variant="contained" color="secondary" component="span" fullWidth className={styles.uploadButton}>
          {I18n.t(title)}
        </Button>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </label>
      {native[attribute] && (
        <Box display="flex" alignItems="center" justifyContent="space-between" pt={1.9}>
          <Box paddingLeft={1}>{fileName}</Box>
          <IconButton
            onClick={() => {
              onNativeChange(attribute, null);
            }}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    </FormControl>
  );
};
