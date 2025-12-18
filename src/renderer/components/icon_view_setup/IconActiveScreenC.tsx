import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Box, Typography } from '@mui/material';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/storeRenderer';

type Props = {
  imageAlt?: string;
  gap?: number;
};

/**
 * IconScreenComponent
 * Renders a 3x3 grid of images using Material-UI components.
 *
 * Usage:
 * <IconScreenComponent images={[...9 urls...]} onSelect={(i)=>console.log(i)} />
 */
export default function IconActiveScreenC({
  imageAlt = 'icon',
  gap = 2,
}: Props) {
  // Ensure there are exactly 9 items to render
  const nActivePageId: number = useSelector(
    (state: RootState) => state.iconStateSlice.nActivePageId
  );

  const oIconPage = useSelector(
    (state: RootState) => state.iconStateSlice.oIconPages[nActivePageId]
  );
  const oIcons = useSelector((state: RootState) => state.iconStateSlice.oIcons);

  console.log('page object');
  console.log(oIconPage);
  const items = oIconPage.aIcons.map((item, index) => {
    if (oIcons[item] && oIcons[item].sIconImagePath != '') {
      return '../database/' + oIcons[item].sIconImagePath;
    } else {
      return '';
    }
  });
  console.log(items);

  return (
    <Box width={200}>
      <Typography>Active keyboard display view</Typography>
      <Grid container spacing={gap}>
        {items.map((src, idx) => (
          <Grid size={4} key={idx}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={src}
                  alt={`${imageAlt}-${idx}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
