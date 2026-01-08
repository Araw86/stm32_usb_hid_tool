import React from 'react';

/*redux import*/
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, store } from '../../store/storeRenderer';
import { KEYBOARD_KEY_ARRAY } from '../../../shared/config/imageArrayConf';
import { Box, Typography } from '@mui/material';

interface KeyboardKeyContainer {
  sKeyboardKey: string;
}

const KeyboardKeyContainer: React.FC<KeyboardKeyContainer> = ({
  sKeyboardKey,
}) => {
  const nKeyboardKeyId = KEYBOARD_KEY_ARRAY[sKeyboardKey].nKeyId;
  const sKeyboardKeyText = KEYBOARD_KEY_ARRAY[sKeyboardKey].keyText;
  const nKeyboardAnalogValue: number = useSelector((state: RootState) => {
    return state.keyboardKeysStateSlice.aKeyAnalogState[nKeyboardKeyId];
  });
  const nKeyboardTresholdValue: number = useSelector((state: RootState) => {
    return state.keyboardKeysStateSlice.aKeyTreshold[nKeyboardKeyId];
  });
  return (
    <Box>
      <Typography>{sKeyboardKeyText}</Typography>
      <Typography fontSize={'0.500rem'}>{nKeyboardAnalogValue}</Typography>
      <Typography fontSize={'0.500rem'}>{nKeyboardTresholdValue}</Typography>
    </Box>
  );
};

export default KeyboardKeyContainer;
