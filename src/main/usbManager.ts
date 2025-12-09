import HID from 'node-hid'
import {usb,findByIds } from 'usb'
import {store} from './store/mainStore'
import { deviceIsConnected, deviceIsDisconnected } from '../shared/redux/slices/testSlice';


let hidDevice : any | null; 
const TARGET_VID = 1155;
const TARGET_PID = 22288;

async function fUsbManager():Promise<void>{


  // hidDevice.write([0x1]);
  // const handleHidData= (data:any)=>{
  //   console.log(data);
  // }
  // hidDevice.on("data", handleHidData);
  deviceConnected();
}

const HID_DATA_MESSAGE_SIZE = 511


console.log('usb library handle attach deatch')
usb.on('attach',deviceAttached);// chec kif device was attached
usb.on('detach',deviceDetach);//check if device was detached
// deviceConnected(); //check if device is already connected

function deviceConnected(){
  const device =findByIds(TARGET_VID,TARGET_PID);
  if(device){
    console.log('Device already connected')
    fUsbConnect();
    store.dispatch(deviceIsConnected());
  }
}


function deviceAttached(device:any){
  const vid=device.deviceDescriptor.idVendor
  const pid=device.deviceDescriptor.idProduct
  if ((vid == TARGET_VID) && ( pid == TARGET_PID)){
    console.log('Attach')
    fUsbConnect();
    store.dispatch(deviceIsConnected());
  }
}

function deviceDetach(device:any){
  const vid=device.deviceDescriptor.idVendor
  const pid=device.deviceDescriptor.idProduct
  if ((vid == TARGET_VID) && ( pid == TARGET_PID)){
    console.log('Detach')
    fUsbDisconnect();
    store.dispatch(deviceIsDisconnected());
  }
}

async function fUsbConnect(){
   /* start usb functions*/
   let hidDevices = await HID.devices();
   let sPath = findDevicePath(hidDevices,22288,1155,1);
   hidDevice = await HID.HIDAsync.open(sPath);
   console.log('connected');
}

function fUsbDisconnect(): void{
  hidDevice =null;
  console.log('disconnected');
}

function findDevicePath(alistOfDevices: Array<any>, nPid:number,nVid:number,nInterface:number): string |any{
  let device = alistOfDevices.find(element => {
    if((element.vendorId == nVid) && (element.productId == nPid) && (element.interface == nInterface)){
      return true;
    }
    return false;
  });
  return device.path;
}


function fHidSend(){
  console.log('Send');
  if(hidDevice==null){
    console.log(`device not connected`);
    return;
  }
  try {
    let aData = new Uint8Array(512);
    aData[0]=2;
    for(let i=0;i<101;i++){
      hidDevice.write(aData);
    }
    // var aData2 = new Uint8Array(1024);
    // aData2[0]=2;
    // hidDevice.write(aData2);
    
  } catch (error) {
    console.log('Hid write error');
    console.log(error);
  }
}

function fHidSendImage(image:Buffer){
  console.log('Send image');
  if(hidDevice==null){
    console.log(`device not connected`);
    return;
  }
  const imageLength = image.length;
  const imageNumber = 0
  let aCmd = new Uint8Array(16);
  let aData = new Uint8Array(512);

  aCmd[0]=1;
  aCmd[1] = 0xff & imageNumber;
  aCmd[2] = 0xff & (imageNumber >> 8);
  aCmd[4]=0xff & imageLength;
  aCmd[5]=0xff & (imageLength >> 8);
  aCmd[6]=0xff & (imageLength >> 16);
  aCmd[7]=0xff & (imageLength >> 24);
  hidDevice.write(aCmd);
  aData[0]=2; // ID 2 -- copy images 
  let nCnt=0;
  for(let i=0;(i*HID_DATA_MESSAGE_SIZE)< imageLength;i++){
    let nStart = i*HID_DATA_MESSAGE_SIZE;
    let nStop = (i+1)*HID_DATA_MESSAGE_SIZE;
    if(nStop>imageLength){
      nStop= imageLength
    }
    image.copy(aData,1,nStart,nStop);
    nCnt+= nStop-nStart;
    hidDevice.write(aData);
  }
}

const HID_DATA_MESSAGE_SIZE2 = 1023
function fHidSendImage2(image:Buffer,imageNumber:number){
  console.log('Send image2');
  if(hidDevice==null){
    console.log(`device not connected`);
    return;
  }
  const imageLength = image.length;
  let aCmd = new Uint8Array(16);
  let aData = new Uint8Array(1024);

  aCmd[0]=1;
  aCmd[1] = 0xff & imageNumber;
  aCmd[2] = 0xff & (imageNumber >> 8);
  aCmd[4]=0xff & imageLength;
  aCmd[5]=0xff & (imageLength >> 8);
  aCmd[6]=0xff & (imageLength >> 16);
  aCmd[7]=0xff & (imageLength >> 24);
  hidDevice.write(aCmd);
  aData[0]=2; // ID 2 -- copy images 
  let nCnt=0;
  for(let i=0;(i*HID_DATA_MESSAGE_SIZE2)< imageLength;i++){
    let nStart = i*HID_DATA_MESSAGE_SIZE2;
    let nStop = (i+1)*HID_DATA_MESSAGE_SIZE2;
    if(nStop>imageLength){
      nStop= imageLength
    }
    image.copy(aData,1,nStart,nStop);
    nCnt+= nStop-nStart;
    hidDevice.write(aData);
  }
}

const HID_DATA_MESSAGE_SIZE3 = 40139
function fHidSendImage3(image:Buffer){
  console.log('Send image');
  if(hidDevice==null){
    console.log(`device not connected`);
    return;
  }
  const imageLength = image.length;
  const imageNumber = 0
  let aCmd = new Uint8Array(16);
  let aData = new Uint8Array(HID_DATA_MESSAGE_SIZE3);

  aCmd[0]=1;
  aCmd[1] = 0xff & imageNumber;
  aCmd[2] = 0xff & (imageNumber >> 8);
  aCmd[4]=0xff & imageLength;
  aCmd[5]=0xff & (imageLength >> 8);
  aCmd[6]=0xff & (imageLength >> 16);
  aCmd[7]=0xff & (imageLength >> 24);
  hidDevice.write(aCmd);
  aData[0]=2; // ID 2 -- copy images 
  let nCnt=0;
  for(let i=0;(i*HID_DATA_MESSAGE_SIZE3)< imageLength;i++){
    let nStart = i*HID_DATA_MESSAGE_SIZE3;
    let nStop = (i+1)*HID_DATA_MESSAGE_SIZE3;
    if(nStop>imageLength){
      nStop= imageLength
    }
    image.copy(aData,1,nStart,nStop);
    nCnt+= nStop-nStart;
    hidDevice.write(aData);
  }
}

// function fHidSendKey


const usbManager = {fUsbManager,fHidSend,fUsbConnect,fUsbDisconnect,fHidSendImage,fHidSendImage2,fHidSendImage3};

export default usbManager;