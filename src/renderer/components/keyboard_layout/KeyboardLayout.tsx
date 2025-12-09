import React from 'react';
// import Keyboard from './Keyboard';
import { Typography } from '@mui/material';
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

const mainKeys = Array(70)
  .fill(null)
  .map((_, i) => <Typography>{`M${i + 1}`}</Typography>);
const sideKeys = Array(40)
  .fill(null)
  .map((_, i) => <Typography>{`S${i + 1}`}</Typography>);

const KeyboardLayout = (props: Props) => {
  return (
    <div style={{ padding: 20 }}>
      <KeyboardContainer
        mainKeyComponents={mainKeys}
        sideKeyComponents={sideKeys}
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
