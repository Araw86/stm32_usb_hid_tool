import { array } from "build/main/main";

import Store from 'electron-store';

import { store } from './store/mainStore';

import { IconStateInterface, setActiveIcons, setAllIcons } from '../shared/redux/slices/iconStateSlice';

import { IMAGE_ARRAY_LENGTH } from '../shared/config/imageArrayConf';

import { app } from "electron";
import path from "path";
import imageFileReader from "./imageFileReader";

/*get path to app data */
let sAppPath = app.getAppPath()
let last = path.basename(sAppPath)
console.log('last: ' + sAppPath)
if (last.search('.asar') > -1) {
  sAppPath = path.dirname(app.getPath('exe'))
}
sAppPath = path.join(sAppPath, 'database');
console.log('Path to app: ' + sAppPath)


const electronStore = new Store({name: `storeIconState`,cwd: sAppPath});



/*read storead data and put them to store */
export function initStoreIcons() {
  let saved: string[] = Array(IMAGE_ARRAY_LENGTH).fill("");
  const stoiredValue = electronStore.get(`iconState`);
  console.log("load estore")
  console.log(stoiredValue)
  const iconState = store.getState().iconStateSlice;
  if ((stoiredValue === undefined)){
    electronStore.set(`iconState`,JSON.stringify(iconState));
  }else{
    store.dispatch(setActiveIcons(JSON.parse(stoiredValue as string) as IconStateInterface));
  }
  console.log(saved)
  const aIconsOnDisk = imageFileReader.aListImages();
  console.log(aIconsOnDisk);
  store.dispatch(setAllIcons(aIconsOnDisk));
};

function storeActiveIcons() {
  const iconState = store.getState().iconStateSlice;
  electronStore.set(`iconState`,JSON.stringify(iconState));
};

const storeIcons = {initStoreIcons,storeActiveIcons};

export default storeIcons;