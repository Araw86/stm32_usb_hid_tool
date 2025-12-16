import React from 'react';

/*redux import*/
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, store } from '../../store/storeRenderer';
import { KEYBOARD_KEY_ARRAY } from '../../../shared/config/imageArrayConf';
import { Box, Typography } from '@mui/material';

type Props = { sKeyboardKey: string };

function KeyboardKeyContainer({ sKeyboardKey }: Props) {
  const keyboardKeyId = KEYBOARD_KEY_ARRAY[sKeyboardKey].nKeyId;
  const keyboardKeyText = KEYBOARD_KEY_ARRAY[sKeyboardKey].keyText;
  const keyboardAnalogValue: number = useSelector((state: RootState) => {
    return state.keyboardKeysStateSlice.aKeyAnalogState[keyboardKeyId];
  });
  return (
    <Box>
      <Typography>{keyboardKeyText}</Typography>
      <Typography fontSize={'0.500rem'}>{keyboardAnalogValue}</Typography>
      <Typography fontSize={'0.500rem'}>{sKeyboardKey}</Typography>
    </Box>
  );
}

export default KeyboardKeyContainer;
