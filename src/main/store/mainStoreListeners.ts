/*redux import*/
import { createListenerMiddleware, PayloadAction } from '@reduxjs/toolkit';

import usbManager from '../usbManager';

import fileReader from '../imageFileReader';

import storeIcons from '../storeIcons';
import { CombinedStateInterface } from 'src/shared/redux/combinedReducer';
import { exec } from 'child_process';
import { IconStateInterface } from 'src/shared/redux/slices/iconStateSlice';
/* create listener to listen for changes in store in main*/
export function createMainListeners() {
  const listener = createListenerMiddleware();

  listener.startListening({
    type: 'testReducer/increment',
    effect: async (action,state) => {
      console.log(state.getState());
      // usbManager.fHidSend();
    }
  });

  listener.startListening({
    type: 'testReducer/send',
    effect: async (action,state) => {
      console.log(state.getState());
      usbManager.fHidSend();
    }
  });

  // listener.startListening({
  //   type: 'testReducer/listImages2',
  //   effect: async (action,state) => {
  //     console.log(`listImages2`);
  //     let aFileList= fileReader.aListImages();

  //     const s =state.getState() as any;

  //     const icons = s.iconStateSlice?.activeIcons ?? [];
  //     if (aFileList.length==0) return;

  //     icons.forEach((icon:string, index:number)=>{
  //       if(icon!=''){
  //         console.log('ListImages2 '+icon+' index '+index);
  //         const file = fileReader.aReadImageFile(icon);
  //         usbManager.fHidSendImage2(file,index);
  //       }
  //     })
  //   }
  // });

  // listener.startListening({
  //   predicate: (action) => {
  //     console.log(action)
  //     return false;
  //   },
  //   effect: async (action,state) => {
  //     console.log(state.getState());
  //   }
  // })
  // listener.startListening({
  //   type: `iconState/setIcon`,
  //   effect: async (action: PayloadAction<{ position: number; icon: string }>, listenerApi) => {
  //     console.log(`activeIcons`);
  //     console.log(action);
  //     console.log(listenerApi);
  //     // getState() is typed as unknown by default here; cast or type it to access slices
  //     const s = listenerApi.getState() as any;
  //     storeIcons.storeActiveIcons(s.iconStateSlice?.activeIcons ?? []);
  //     const position = action.payload.position;
  //     const icon = action.payload.icon;
  //     const file = fileReader.aReadImageFile(icon);
  //     usbManager.fHidSendImage2(file, position);
  //   }
  // });

  listener.startListening({
    predicate: (action, currentState:CombinedStateInterface, previousState:CombinedStateInterface) => {
      if (currentState.iconStateSlice?.nActivePageId !== previousState.iconStateSlice?.nActivePageId) {
        return true;
      }
      if(currentState.iconStateSlice?.oIconPages[currentState.iconStateSlice?.nActivePageId ]?.aIcons !== previousState.iconStateSlice?.oIconPages[previousState.iconStateSlice?.nActivePageId]?.aIcons){
        return true;
      }
      return false;
    },
    effect: async (action, state) => {
      console.log(`activePageId changed`);
      let aFileList= fileReader.aListImages();

      const s =state.getState() as any;
      const nActivePageId= s.iconStateSlice?.nActivePageId ?? 0;
      const icons = s.iconStateSlice?.oIconPages[nActivePageId]?.aIcons ?? [];
      console.log(icons)
      if (aFileList.length==0) return;

      icons.forEach((icon:number, index:number)=>{
        if(icon!=0){
          const iconPath= s.iconStateSlice?.oIcons[icon]?.sIconImagePath ?? '';
          const file = fileReader.aReadImageFile(iconPath);
          usbManager.fHidSendImage2(file,index);
        }else{
          usbManager.fHidSendEmptyImage(index);
        }
      })
    }
  });

  listener.startListening({
    type: 'iconState/iconPress',
    effect: async (action: PayloadAction<number[]>,listenerApi) => {
      const stateSlices = listenerApi.getState() as { iconStateSlice: IconStateInterface };
      const state = stateSlices.iconStateSlice;
      const nIconPosition=action.payload;
      let nButtonPressed=-1;
      for(let i=0;i<nIconPosition.length;i++){
        if(nIconPosition[i]!==0){
          nButtonPressed=i;
        }
      }
      let sProgramPath: string | null = null;
      if(nButtonPressed!=-1){
        const nActivePageId=state.nActivePageId;
        const oActivePage=state.oIconPages[nActivePageId];
        let nIconPressed = oActivePage.aIcons[nButtonPressed];
        const oIconPressed=state.oIcons[nIconPressed];
        if(oIconPressed!==undefined){
          if(oIconPressed.bIconIsBack){

          }
          else if(oIconPressed.nLinkedPageId!=0){

          }else{
            // /* launch program */
            const sProgramPath=oIconPressed.sIconProgramPath;
            console.log('launch program '+sProgramPath)
            exec(sProgramPath,(error,stdout,stderr)=>{
              if (error) {
                console.error(`Error executing file: ${error}`);
                return;
              }
            })
          }
        }
      }
    }
  });
 return listener;
}

