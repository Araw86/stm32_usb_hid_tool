import React from 'react';
import { Box } from '@mui/material';
import MainKeyboard from './MainKeyboard';
import SideKeypad from './SideKeypad';

interface KeyboardContainerProps {
  mainKeyComponents: React.ReactNode[];
  sideKeyComponents: React.ReactNode[];
}

const KeyboardContainer: React.FC<KeyboardContainerProps> = ({
  mainKeyComponents,
  sideKeyComponents,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
      <MainKeyboard keyComponents={mainKeyComponents} />
      <SideKeypad keyComponents={sideKeyComponents} />
    </Box>
  );
};

export default KeyboardContainer;
