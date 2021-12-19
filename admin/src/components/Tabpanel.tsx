import React, { ReactElement, ReactNode } from 'react';

interface TabPanelProps {
  panelId: string;
  activePanelId: string;
  children: ReactNode;
}

export const TabPanel = ({ panelId, activePanelId, children }: TabPanelProps): ReactElement => {
  return (
    <div role="tabpanel" hidden={panelId !== activePanelId}>
      {panelId === activePanelId && children}
    </div>
  );
};
