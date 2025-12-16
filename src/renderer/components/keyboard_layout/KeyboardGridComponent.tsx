import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { KEY_MIN_WIDTH, KEY_HEIGHT } from './keyboardConstants';
import KeyboardKeyContainer from './KeyboardKeyContainer';

interface KeyboardGridComponent {
  keyLayout: (string | null)[][];
  keySpanMap: Record<string, number>;
}

const defaultKeySpan = 1;

const keyBoxSx: SxProps<Theme> = {
  borderRadius: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // fontSize: '0.875rem',
  userSelect: 'none',
  cursor: 'default',
  height: KEY_HEIGHT,
  margin: 0.3,
  boxSizing: 'border-box',
  minWidth: KEY_MIN_WIDTH,
};

const KeyboardGridComponent: React.FC<KeyboardGridComponent> = ({
  keyLayout,
  keySpanMap,
}) => {
  const totalKeys = keyLayout.reduce((acc, row) => acc + row.length, 0);
  // const components = [...keyComponents];
  // while (components.length < totalKeys) {
  //   components.push(null);
  // }

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
            const Component = KeyboardKeyContainer;
            const content = key ? <Component sKeyboardKey={key} /> : null;

            return (
              <Box
                key={`side-key-${keyOffset}-${rowIndex}-${keyIndex}`}
                sx={{
                  ...keyBoxSx,
                  gridColumn: key ? `span ${span}` : undefined,
                  gridRowStart:
                    key && ['EnderN', '+N'].includes(key) ? rowIndex : `auto`,
                  gridRowEnd:
                    key && ['EnderN', '+N'].includes(key)
                      ? rowIndex + 1
                      : `auto`,
                  border:
                    '2px solid ' +
                    (key &&
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
                      : '#e0f2f1'),

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
      {renderGrid(keyLayout, 0)}
    </Box>
  );
};

export default KeyboardGridComponent;
