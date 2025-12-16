import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { KEYBOARD_KEYS_LENGTH } from '../../config/imageArrayConf';


export interface KeyKeysStateInterface {
  nKeyAnalogState:number;
  aKeyAnalogState: number[];
  nKeyTresholdState:number;
  aKeyTreshold: number[];
}


const initialState: KeyKeysStateInterface = {
  nKeyAnalogState: 0,
  aKeyAnalogState: Array(KEYBOARD_KEYS_LENGTH).fill(0),
  nKeyTresholdState:0,
  aKeyTreshold:Array(KEYBOARD_KEYS_LENGTH).fill(0)
}


const kyboardKeyStateSlice = createSlice({
  name:'kyboardKeyState',
  initialState,
  reducers:{
    setAllKeyTreshold(slice,action: PayloadAction<number[]>){
      slice.aKeyTreshold[action.payload[0]]=action.payload[1];
      slice.nKeyTresholdState++;
    },
    setKeyTreshold(slice,action: PayloadAction<number[]>){
      slice.aKeyTreshold=action.payload;
      slice.nKeyTresholdState++;
    },
    setKeyAnalogState(slice,action: PayloadAction<number[]>){
      slice.aKeyAnalogState=action.payload;
      slice.nKeyAnalogState++;
    }
  }
});

/*export dispatch functions */
export const {setAllKeyTreshold, setKeyTreshold, setKeyAnalogState } = kyboardKeyStateSlice.actions;
/* export reducer */
export default kyboardKeyStateSlice.reducer;