import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface KeyboardProps {
  keyComponents: React.ReactNode[]; // Components to fill keys in order
}

const keyLayout: (string | null)[][] = [
  // Row 1: Esc, F1-F12, Print, Scroll, Pause
  [
    'Esc',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'Print',
    'Scroll',
    'Pause',
  ],
  // Row 2: `~ 1 2 3 4 5 6 7 8 9 0 - = Backspace
  [
    '`',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    'Backspace',
  ],
  // Row 3: Tab Q W E R T Y U I O P [ ] \
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  // Row 4: Caps A S D F G H J K L ; ' Enter
  ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  // Row 5: Shift Z X C V B N M , . / Shift
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
  // Row 6: Ctrl Win Alt Space Alt Fn Ctrl
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Fn', 'Ctrl'],
  // Navigation cluster: Insert Home PgUp Delete End PgDn
  ['Insert', 'Home', 'PgUp', 'Delete', 'End', 'PgDn'],
  // Arrow keys: Up, Left, Down, Right (arranged in grid)
  ['ArrowUp'],
  ['ArrowLeft', 'ArrowDown', 'ArrowRight'],
  // Numpad: Num Lock / * - 7 8 9 + 4 5 6 1 2 3 Enter 0 .
  ['NumLock', '/', '*', '-'],
  ['7', '8', '9', '+'],
  ['4', '5', '6'],
  ['1', '2', '3', 'Enter'],
  ['0', '.'],
];

// Define grid column spans for special keys to mimic their width visually
const keySpanMap: Record<string, number> = {
  Backspace: 1.9,
  Tab: 1.5,
  Caps: 1.75,
  Enter: 2.25,
  Shift: 2.25,
  Space: 5.9,
  Ctrl: 1.5,
  Win: 1.5,
  Alt: 1.5,
  Fn: 1.5,
  ArrowUp: 1,
  ArrowLeft: 1,
  ArrowDown: 1,
  ArrowRight: 1,
  NumLock: 1,
};

const defaultKeySpan = 1;

const keyBoxSx: SxProps<Theme> = {
  border: '1px solid #ccc',
  borderRadius: 1,
  backgroundColor: '#e0f2f1', // teal-ish background
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  userSelect: 'none',
  cursor: 'default',
  height: 40,
  margin: 0.3,
  boxSizing: 'border-box',
};

const Keyboard: React.FC<KeyboardProps> = ({ keyComponents }) => {
  // Flatten the layout keys count
  const totalKeys = keyLayout.reduce((acc, row) => acc + row.length, 0);

  // If fewer components than keys, fill with null
  const components = [...keyComponents];
  while (components.length < totalKeys) {
    components.push(null);
  }

  let compIndex = 0;

  return (
    <Box
      sx={{
        display: 'inline-block',
        padding: 2,
        backgroundColor: '#fafafa',
        borderRadius: 2,
        boxShadow: 3,
        fontFamily: 'Roboto, sans-serif',
        userSelect: 'none',
      }}
    >
      {keyLayout.map((row, rowIndex) => {
        // Calculate grid template columns for this row based on key spans
        const gridTemplateColumns = row
          .map((key) => {
            if (!key) return '1fr';
            return `${keySpanMap[key] ?? defaultKeySpan}fr`;
          })
          .join(' ');

        return (
          <Box
            key={`row-${rowIndex}`}
            sx={{
              display: 'grid',
              gridTemplateColumns,
              marginBottom: 0.5,
            }}
          >
            {row.map((key, keyIndex) => {
              const span = keySpanMap[key ?? ''] ?? defaultKeySpan;
              const content = components[compIndex];
              compIndex++;

              return (
                <Box
                  key={`key-${rowIndex}-${keyIndex}`}
                  sx={{
                    ...keyBoxSx,
                    gridColumn: `span ${span}`,
                    backgroundColor:
                      key &&
                      [
                        'Esc',
                        'Enter',
                        'Shift',
                        'Backspace',
                        'Caps',
                        'Space',
                        'Ctrl',
                        'Win',
                        'Alt',
                      ].includes(key)
                        ? '#80cbc4'
                        : '#e0f2f1',
                  }}
                >
                  {content}
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default Keyboard;
