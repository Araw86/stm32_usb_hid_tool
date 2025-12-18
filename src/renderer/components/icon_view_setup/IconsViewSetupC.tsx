import { Box, Grid } from '@mui/system';
import React from 'react';
import IconPagesViewC from './IconPagesViewC';
import IconActiveScreenC from './IconActiveScreenC';
import IconPageSetupViewC from './IconPageSetupViewC';

type Props = {};

const IconsViewSetupC = (props: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <IconPagesViewC />
      </Grid>
      <Grid size={4}>
        <Box>
          <IconPageSetupViewC />
        </Box>
      </Grid>
      <Grid size={4}>
        <Box>
          <IconActiveScreenC />
        </Box>
      </Grid>
    </Grid>
  );
};

export default IconsViewSetupC;
