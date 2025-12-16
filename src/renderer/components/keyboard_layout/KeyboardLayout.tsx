import React from 'react';
// import Keyboard from './Keyboard';
import { Box, Typography } from '@mui/material';
import KeyboardContainer from './KeyboardContainer';

type Props = {};

const KeyboardLayout = (props: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <KeyboardContainer />
    </div>
  );
};

export default KeyboardLayout;
