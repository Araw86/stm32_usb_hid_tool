import { array } from "build/main/main";

import Store from 'electron-store';

import { store } from './store/mainStore';

import { setActiveIcons, setAllIcons } from '../shared/redux/slices/iconStateSlice';

import { IMAGE_ARRAY_LENGTH } from './config/imageArrayConf';

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


const electronStore = new Store({name: `storeIconState`,cwd: sAppPath, schema:{
  icons:{type:`array`,
         items:{type:`string`}
  }
}});



/*read storead data and put them to store */
export function initStoreIcons() {
  let saved: string[] = Array(IMAGE_ARRAY_LENGTH).fill("");
  const stoiredValue = electronStore.get(`icons`);
  console.log("load estore")
  if ((stoiredValue === undefined) ||!Array.isArray(stoiredValue)){
    electronStore.set(`icons`,saved);
  }else{
    saved = stoiredValue as string[];
  }
  console.log(saved)
  const aIconsOnDisk = imageFileReader.aListImages();
  console.log(aIconsOnDisk);
  store.dispatch(setActiveIcons(saved));
  store.dispatch(setAllIcons(aIconsOnDisk));
};

function storeActiveIcons(icons:Array<string>) {
  electronStore.set(`icons`,icons);
};

const storeIcons = {initStoreIcons,storeActiveIcons};

export default storeIcons;