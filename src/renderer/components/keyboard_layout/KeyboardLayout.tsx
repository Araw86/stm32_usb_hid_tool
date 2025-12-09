import React from 'react';
// import Keyboard from './Keyboard';
import { Box, Typography } from '@mui/material';
import KeyboardContainer from './KeyboardContainer';

type Props = {};

const components = [
  <Typography>Esc</Typography>, // Esc key
  <Typography>F1</Typography>, // F1 key
  // ... fill all keys in row-major order
];

// For testing, fill with simple text components for all keys
// const allKeys = Array(104)
//   .fill(null)
//   .map((_, i) => <Typography>{`Key ${i + 1}`}</Typography>);

const mainKeys = Array(74)
  .fill(null)
  .map((_, i) => (
    <Box>
      <Typography>{`K${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`K${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`K${i + 1}`}</Typography>
    </Box>
  ));
const navKeys = Array(13)
  .fill(null)
  .map((_, i) => (
    <Box>
      <Typography>{`A${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`A${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`A${i + 1}`}</Typography>
    </Box>
  ));

const numKeys = Array(21)
  .fill(null)
  .map((_, i) => (
    <Box>
      <Typography>{`N${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`N${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`N${i + 1}`}</Typography>
    </Box>
  ));

const addKeys = Array(6)
  .fill(null)
  .map((_, i) => (
    <Box>
      <Typography>{`S${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`S${i + 1}`}</Typography>
      <Typography fontSize={'0.500rem'}>{`S${i + 1}`}</Typography>
    </Box>
  ));

const KeyboardLayout = (props: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <KeyboardContainer
        mainKeyComponents={mainKeys}
        navKeyComponents={navKeys}
        numKeyComponents={numKeys}
        addKeyComponents={addKeys}
      />
    </div>
  );
};

export default KeyboardLayout;

// import React from 'react';
// import KeyboardContainer from './KeyboardContainer';
// import { Typography } from '@mui/material';

// const mainKeys = Array(70).fill(null).map((_, i) => <Typography>{`M${i + 1}`}</Typography>);
// const sideKeys = Array(40).fill(null).map((_, i) => <Typography>{`S${i + 1}`}</Typography>);

// export default function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <KeyboardContainer mainKeyComponents={mainKeys} sideKeyComponents={sideKeys} />
//     </div>
//   );
// }
