import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface KeyboardProps {
  keyComponents: React.ReactNode[];
}

const mainKeyLayout: (string | null)[][] = [
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
  ],
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
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Fn', 'Ctrl'],
];

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
};

const defaultKeySpan = 1;

const keyBoxSx: SxProps<Theme> = {
  border: '1px solid #ccc',
  borderRadius: 1,
  backgroundColor: '#e0f2f1',
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

const MainKeyboard: React.FC<KeyboardProps> = ({ keyComponents }) => {
  const totalKeys = mainKeyLayout.reduce((acc, row) => acc + row.length, 0);
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
      {mainKeyLayout.map((row, rowIndex) => {
        const gridTemplateColumns = row
          .map((key) => `${keySpanMap[key ?? ''] ?? defaultKeySpan}fr`)
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

export default MainKeyboard;
