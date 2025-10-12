import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface TestInterface {
  testState1: number;
  connect:boolean;
  disconnect:boolean;
  connectState:boolean;
  send:boolean;
  listImages:boolean;
}


const initialState: TestInterface = {
  testState1:0,
  connect:false,
  disconnect:false,
  connectState:false,
  send:false,
  listImages:false
}


const testSlice = createSlice({
  name:'testReducer',
  initialState,
  reducers:{
    increment(slice,action: PayloadAction<null>){
      slice.testState1=slice.testState1+1;
    },
    connect(slice,action:PayloadAction<null>){
      slice.connect=true;
    },
    disconnect(slice,action:PayloadAction<null>){
      slice.disconnect=true;
    },
    send(slice,action:PayloadAction<null>){
      slice.send=true;
    },
    listImages(slice,action:PayloadAction<null>){
      slice.listImages=true;
    },

  }
});

/*export dispatch functions */
export const { increment,connect,disconnect,send, listImages } = testSlice.actions;
/* export reducer */
export default testSlice.reducer;
