/*redux import*/
import { createListenerMiddleware } from '@reduxjs/toolkit';

import usbManager from '../usbManager';

import fileReader from '../fileReader';
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

  listener.startListening({
    type: 'testReducer/listImages2',
    effect: async (action,state) => {
      console.log(`listImages2`);
      let aFileList= fileReader.aListImages();
      let file = fileReader.aReadFile(aFileList[0]);
      usbManager.fHidSendImage2(file,0);
      usbManager.fHidSendImage2(file,3);
    }
  });

  // listener.startListening({
  //   predicate: (action) => {
  //     console.log(action)
  //     return false;
  //   },
  //   effect: async (action,state) => {
  //     console.log(state.getState());
  //   }
  // })

 return listener;
}

