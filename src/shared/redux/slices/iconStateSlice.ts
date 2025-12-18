import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface IconPageInterface {
  sPageName: string;
  bIsRootPage: boolean;
  aIcons: number[];
  aPages: number[];
}

export interface IconPageObjectInterface {
    [key: number]: IconPageInterface;
}

export interface IconInterface {
  sIconName: string;
  sIconImagePath: string;
  bIconIsBack: boolean;
  nLinkedPageId: number;
  sIconProgramPath: string;
}

export interface IkonObjectInterface {
    [key: number]: IconInterface;
}

export interface AddIconIconPayloadInterface {
  sIconPosition:number
  sIconName: string;
  sIconImagePath: string;
  bLinkedPage: boolean;
  sIconProgramPath: string;
}
export interface IconStateInterface {
  activeIcons: string[]|null;
  allIcons: string[]|null;

  nActiveConfigPageId:number;

  nActivePageId:number;
  oIconPages: IconPageObjectInterface;
  oIcons: IkonObjectInterface;

  nIdPageGenerator:number;
  nIdIconGenerator:number;

  nPageChangeCounter:number;
}


const initialState: IconStateInterface = {
  /*old*/
  activeIcons: null,
  allIcons: null,
/*new*/

  nActiveConfigPageId:0,

  nActivePageId:0,
  
  oIconPages:{0:{sPageName:"Root",bIsRootPage:true,aIcons:[0,0,0,0,0,0,0,0,0],aPages:[]}} as IconPageObjectInterface,
  oIcons:{} as IkonObjectInterface,

  nIdPageGenerator:0,
  nIdIconGenerator:0,
  nPageChangeCounter:0,
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
    },
    setActivePageId(slice,action: PayloadAction<number>){
      slice.nActivePageId=action.payload;
    },
    setActiveConfigPageId(slice,action: PayloadAction<number>){
      slice.nActiveConfigPageId=action.payload;
    },
    addIcon(slice,action: PayloadAction<AddIconIconPayloadInterface>){
      const payload=action.payload;
      /*check if icon already exists*/
      const nActiveConfigPageId=slice.nActiveConfigPageId;
      const oActivePage=slice.oIconPages[nActiveConfigPageId];
      
      const nNewIconId=generateIconId();
      slice.oIcons[nNewIconId]={
        sIconName: payload.sIconName,
        sIconImagePath: payload.sIconImagePath,
        nLinkedPageId: 0,
        sIconProgramPath: payload.sIconProgramPath,
        bIconIsBack: false,
      };
      oActivePage.aIcons[payload.sIconPosition]=nNewIconId;

      function generateIconId(){
        let nNewId:number;
        do{
          nNewId=slice.nIdIconGenerator++;
        }while(slice.oIcons[nNewId]);
        return nNewId;
      }
      if(payload.bLinkedPage){
        const nNewPageId=generatePageId();
        slice.oIconPages[nNewPageId]={
          sPageName: payload.sIconName,
          bIsRootPage: false,
          aIcons: [0,0,0,0,0,0,0,0,0],
          aPages: [],
        }
        slice.oIcons[nNewIconId].nLinkedPageId=nNewPageId;
        /* back icon */
        const nBackIconId=generateIconId();
        slice.oIcons[nBackIconId]={
          sIconName: "Back",
          sIconImagePath: "icon_back.png",
          nLinkedPageId: 0,
          sIconProgramPath: "",
          bIconIsBack: true,
        };
        slice.oIconPages[nNewPageId].aIcons[0]=nBackIconId;

      }
      function generatePageId(){
        let nNewId:number;
        do{
          nNewId=slice.nIdPageGenerator++;
        }while(slice.oIconPages[nNewId]);
        return nNewId;
      }
    },
    removeIcon(slice,action: PayloadAction<number>){
      const nIconPosition=action.payload;
      const nActiveConfigPageId=slice.nActiveConfigPageId;
      const oActivePage=slice.oIconPages[nActiveConfigPageId];
      const nIconId=oActivePage.aIcons[nIconPosition];
      /* check for related pages*/
      const oIcon = slice.oIcons[nIconId];
      const nLinkedPageId = oIcon.nLinkedPageId;

      if(nLinkedPageId!=0){
        removePage(nLinkedPageId);
      }else{
        removeIcon(nIconId)
      }

      oActivePage.aIcons[nIconPosition]=0;

      function removePage(nPageId:number){
        const page= slice.oIconPages[nPageId];
        /* remove all pages linked to this page */
        page.aPages.forEach((nPageId:number)=>{
          removePage(nPageId);
        });
        /* remove all icons linked to this page */
        page.aIcons.forEach((nIconId:number)=>{
          removeIcon(nIconId);
        });
        if(slice.nActivePageId==nPageId){
          slice.nActivePageId=0;
        }
        delete slice.oIconPages[nPageId];
      }
      function removeIcon(nIconId:number){
        delete slice.oIcons[nIconId];
      }

    }
  }
});

/*export dispatch functions */
export const {setActiveIcons, setAllIcons, setIcon, setActivePageId, setActiveConfigPageId, addIcon, removeIcon } = iconStateSlice.actions;
/* export reducer */
export default iconStateSlice.reducer;