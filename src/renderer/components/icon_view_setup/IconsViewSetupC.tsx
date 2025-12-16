import { Box, Grid } from '@mui/system';
import React from 'react';
import TreeViewC from './TreeViewC';

type Props = {};

const IconsViewSetupC = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <TreeViewC />
      </Grid>
      <Grid size={4}>
        <Box>size=4</Box>
      </Grid>
      <Grid size={4}>
        <Box>size=4</Box>
      </Grid>
    </Grid>
  );
};

export default IconsViewSetupC;
