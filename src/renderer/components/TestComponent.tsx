/* react import */
import React from 'react';

/* mui import */
import { Box } from '@mui/system';
import { Button } from '@mui/material';

/*redux import*/
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, store } from '../store/storeRenderer';
import {
  increment,
  connect,
  disconnect,
  send,
  listImages,
  listImages2,
  listImages3,
} from '../../shared/redux/slices/testSlice';

//TypedUseSelectorHook<RootState>
function TestComponent() {
  const testStateValue: number = useSelector((state: RootState) => {
    return state.testSlice.testState1;
  });
  console.log(testStateValue);
  const versionNode = window.versions?.chrome(); //
  return (
    <Box>
      <Box>TestComponent {testStateValue}</Box>
      <Box>node {versionNode}</Box>
      <Box>
        <Button
          onClick={() => {
            store.dispatch(increment());
          }}
        >
          Increment
        </Button>
        <Button
          onClick={() => {
            store.dispatch(connect());
          }}
        >
          Connect
        </Button>
        <Button
          onClick={() => {
            store.dispatch(disconnect());
          }}
        >
          Disconnect
        </Button>
        <Button
          onClick={() => {
            store.dispatch(send());
          }}
        >
          Send
        </Button>
        <Button
          onClick={() => {
            store.dispatch(listImages());
          }}
        >
          List Images
        </Button>
        <Button
          onClick={() => {
            store.dispatch(listImages2());
          }}
        >
          List Images2
        </Button>
        <Button
          onClick={() => {
            store.dispatch(listImages3());
          }}
        >
          List Images3
        </Button>
      </Box>
    </Box>
  );
}

export default TestComponent;
