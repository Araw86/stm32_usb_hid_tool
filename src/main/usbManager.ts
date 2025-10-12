import HID from 'node-hid'

let hidDevice : any | null; 
async function fUsbManager():Promise<void>{



  // hidDevice.write([0x1]);
  // const handleHidData= (data:any)=>{
  //   console.log(data);
  // }
  // hidDevice.on("data", handleHidData);

}

const HID_DATA_MESSAGE_SIZE = 511

async function fUsbConnect(){
   /* start usb functions*/
   let hidDevices = await HID.devices();
   let sPath = findDevicePath(hidDevices,22288,1155,2);
   hidDevice = await HID.HIDAsync.open(sPath);
   console.log('connect');
}

function fUsbDisconnect(): void{
  hidDevice =null;
  console.log('disconnect');
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
  console.log(imageLength);
  let aCmd = new Uint8Array(16);
  let aData = new Uint8Array(512);
  aCmd[0]=1;
  aCmd[1]=2;
  aCmd[2]=3;
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
    console.log(nCnt);
    hidDevice.write(aData);
  }
}

const usbManager = {fUsbManager,fHidSend,fUsbConnect,fUsbDisconnect,fHidSendImage};

export default usbManager;