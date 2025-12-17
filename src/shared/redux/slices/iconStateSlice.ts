import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IconPageInterface {
  nPageId: number;
  sPageName: string;
  bIsRootPage: boolean;
  aIcons: number[];
}

export interface IconPageObjectInterface {
    [key: number]: IconPageInterface;
}

export interface IconInterface {
  nIconId: number;
  sIconName: string;
  sIconImagePath: string;
  bIconIsBack: boolean;
  nLinkedPageId: number;
  sIconProgramPath: string;
}

export interface IkonObjectInterface {
    [key: number]: IconInterface;
}

export interface IconStateInterface {
  activeIcons: string[]|null;
  allIcons: string[]|null;

  nActivePageId:number;
  oIconPages: IconPageObjectInterface;
  oIcons: IkonObjectInterface;
}


const initialState: IconStateInterface = {
  /*old*/
  activeIcons: null,
  allIcons: null,
/*new*/
  nActivePageId:0,
  oIconPages:{} as IconPageObjectInterface,
  oIcons:{} as IkonObjectInterface
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