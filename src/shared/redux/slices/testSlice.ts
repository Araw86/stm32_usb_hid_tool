import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface TestInterface {
  testState1: number;
  connect:boolean;
  disconnect:boolean;
  connectState:boolean;
  send:boolean;
  listImages:boolean;
  listImages2:boolean;
  listImages3:boolean;
}


const initialState: TestInterface = {
  testState1:0,
  connect:false,
  disconnect:false,
  connectState:false,
  send:false,
  listImages:false,
  listImages2:false,
  listImages3:false
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
    listImages2(slice,action:PayloadAction<null>){
      slice.listImages2=true;
    },
    listImages3(slice,action:PayloadAction<null>){
      slice.listImages3=true;
    },

  }
});

/*export dispatch functions */
export const { increment,connect,disconnect,send, listImages,listImages2,listImages3 } = testSlice.actions;
/* export reducer */
export default testSlice.reducer;
