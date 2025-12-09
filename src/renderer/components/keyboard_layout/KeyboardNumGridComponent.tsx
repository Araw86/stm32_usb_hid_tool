import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { KEY_MIN_WIDTH, KEY_HEIGHT } from './keyboardConstants';

interface KeyboardGridNumComponent {
  keyComponents: React.ReactNode[];
  keyLayout: (string | null)[][];
  keySpanMap: Record<string, number>;
}

const defaultKeySpan = 1;

const keyBoxSx: SxProps<Theme> = {
  border: '1px solid #ccc',
  borderRadius: 1,
  backgroundColor: '#e0f2f1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // fontSize: '0.875rem',
  userSelect: 'none',
  cursor: 'default',
  height: KEY_HEIGHT,
  margin: 0.3,
  marginBottom: 0.8,
  boxSizing: 'border-box',
  minWidth: KEY_MIN_WIDTH,
};

const KeyboardGridNumComponent: React.FC<KeyboardGridNumComponent> = ({
  keyComponents,
  keyLayout,
  keySpanMap,
}) => {
  const totalKeys = keyLayout.reduce((acc, row) => acc + row.length, 0);
  const components = [...keyComponents];
  while (components.length < totalKeys) {
    components.push(null);
  }

  let compIndex = 0;

  const renderGrid = (layout: (string | null)[][], keyOffset: number) => {
    let aGridElements: React.JSX.Element[] = [];
    layout.forEach((row, rowIndex) => {
      row.forEach((key, keyIndex) => {
        const span = keySpanMap[key ?? ''] ?? defaultKeySpan;
        const content = key ? components[compIndex++] : null;
        let sGridColumn;
        if (key && ['0'].includes(key)) {
          sGridColumn =
            key && ['0'].includes(key)
              ? `${keyIndex + 1} /${keyIndex + 3}`
              : undefined;
        } else {
          sGridColumn =
            key && ['EnterN', '+N'].includes(key) ? keyIndex + 1 : undefined;
        }

        aGridElements.push(
          <Box
            key={`side-key-${keyOffset}-${rowIndex}-${keyIndex}`}
            sx={{
              ...keyBoxSx,
              // gridColumn: key ? `span ${span}` : undefined,
              gridColumn: sGridColumn,
              gridRow:
                key && ['EnterN', '+N'].includes(key)
                  ? `${rowIndex + 1} /${rowIndex + 3}`
                  : 'auto',
              height:
                key && ['EnterN', '+N'].includes(key)
                  ? 2 * KEY_HEIGHT + 8.6
                  : KEY_HEIGHT,
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
              visibility: key ? 'visible' : 'hidden',
            }}
          >
            {content}
          </Box>
        );
      });
    });
    return aGridElements;
  };
  const gridTemplateColumns = keyLayout[0]
    .map((key) => `${keySpanMap[key ?? ''] ?? defaultKeySpan}fr`)
    .join(' ');
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 2,
        userSelect: 'none',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridAutoRows: '1fr',
          gridTemplateColumns,
          marginBottom: 0.5,
        }}
      >
        {/* Navigation cluster */}
        {renderGrid(keyLayout, 0)}
      </Box>
    </Box>
  );
};

export default KeyboardGridNumComponent;
