import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface SideKeypadProps {
  keyComponents: React.ReactNode[];
}

const navLayout: (string | null)[][] = [
  ['Insert', 'Home', 'PgUp'],
  ['Delete', 'End', 'PgDn'],
];

const arrowLayout: (string | null)[][] = [
  [null, 'ArrowUp', null],
  ['ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const numpadLayout: (string | null)[][] = [
  ['NumLock', '/', '*', '-'],
  ['7', '8', '9', '+'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', 'Enter'],
  ['0', null, '.', 'Enter'],
];

const keySpanMap: Record<string, number> = {
  Enter: 2,
  '0': 2,
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

const SideKeypad: React.FC<SideKeypadProps> = ({ keyComponents }) => {
  // Count total keys in nav + arrow + numpad layouts
  const totalKeys =
    navLayout.reduce((acc, row) => acc + row.length, 0) +
    arrowLayout.reduce((acc, row) => acc + row.length, 0) +
    numpadLayout.reduce((acc, row) => acc + row.length, 0);

  const components = [...keyComponents];
  while (components.length < totalKeys) {
    components.push(null);
  }

  let compIndex = 0;

  const renderGrid = (layout: (string | null)[][], keyOffset: number) => {
    return layout.map((row, rowIndex) => {
      const gridTemplateColumns = row
        .map((key) => `${keySpanMap[key ?? ''] ?? defaultKeySpan}fr`)
        .join(' ');

      return (
        <Box
          key={`side-row-${keyOffset}-${rowIndex}`}
          sx={{
            display: 'grid',
            gridTemplateColumns,
            marginBottom: 0.5,
          }}
        >
          {row.map((key, keyIndex) => {
            const span = keySpanMap[key ?? ''] ?? defaultKeySpan;
            const content = key ? components[compIndex++] : null;

            return (
              <Box
                key={`side-key-${keyOffset}-${rowIndex}-${keyIndex}`}
                sx={{
                  ...keyBoxSx,
                  gridColumn: key ? `span ${span}` : undefined,
                  backgroundColor: key ? '#80cbc4' : 'transparent',
                  visibility: key ? 'visible' : 'hidden',
                }}
              >
                {content}
              </Box>
            );
          })}
        </Box>
      );
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 2,
        userSelect: 'none',
      }}
    >
      {/* Navigation cluster */}
      {renderGrid(navLayout, 0)}

      {/* Arrow keys */}
      {renderGrid(arrowLayout, 100)}

      {/* Numpad */}
      {renderGrid(numpadLayout, 200)}
    </Box>
  );
};

export default SideKeypad;
