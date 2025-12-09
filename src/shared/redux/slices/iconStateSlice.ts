import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IconStateInterface {
  activeIcons: string[]|null;
  allIcons: string[]|null;
}


const initialState: IconStateInterface = {
  activeIcons: null,
  allIcons: null
}


const iconStateSlice = createSlice({
  name:'iconState',
  initialState,
  reducers:{
    setActiveIcons(slice,action: PayloadAction<string[]>){
      slice.activeIcons=action.payload;
    },
    setAllIcons(slice,action: PayloadAction<string[]>){
      slice.allIcons=action.payload;
    },
    setIcon(slice,action: PayloadAction<{position:number;icon:string}>){
      slice.activeIcons[action.payload.position]=action.payload.icon;
    }
  }
});

/*export dispatch functions */
export const {setActiveIcons, setAllIcons, setIcon } = iconStateSlice.actions;
/* export reducer */
export default iconStateSlice.reducer;