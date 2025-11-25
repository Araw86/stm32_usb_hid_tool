/* react import */
import React from 'react';

/* mui import */
import { Box } from '@mui/system';
import { Button } from '@mui/material';

/*redux import*/
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState, store } from '../store/storeRenderer';
import { increment, listImages2 } from '../../shared/redux/slices/testSlice';

//TypedUseSelectorHook<RootState>
function TestComponent() {
  const testStateValue: number = useSelector((state: RootState) => {
    return state.testSlice.testState1;
  });
  console.log(testStateValue);
  const versionNode = window.versions?.chrome(); //
  return (
    <Box>
      <Box>
        <Button
          onClick={() => {
            store.dispatch(listImages2());
          }}
        >
          Send image
        </Button>
      </Box>
    </Box>
  );
}

export default TestComponent;
