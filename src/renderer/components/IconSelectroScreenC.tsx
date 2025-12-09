import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { store } from '../store/storeRenderer';
import { setIcon } from '../../shared/redux/slices/iconStateSlice';

type Props = {
  images: string[]; // array of image names or paths
  open?: boolean; // initial open state (default true)
  basePath?: string; // optional base path to prepend to image names (default "/assets/icons/")
  actionType?: string; // redux action type to dispatch (default "ICON_SELECTED")
  onClose?: () => void; // optional callback when dialog is closed
  onSelect?: (image: string) => void; // optional callback when an image is selected (in addition to dispatch)
  index?: number; // optional index of the icon being selected
};

const IconSelectroScreenC: React.FC<Props> = ({
  images,
  open: openProp = true,
  basePath = '../database/',
  actionType = 'ICON_SELECTED',
  onClose,
  onSelect,
  index = -1,
}) => {
  // const dispatch = useDispatch();
  console.log('openProp ' + openProp);
  const [openDialog, setOpen] = useState<boolean>(openProp);
  const [openDialogId, setOpenDialogId] = useState<number>(index);
  const handleClose = () => {
    console.log('inc close');
    setOpen(false);
    onClose?.();
  };
  console.log('IconSelectroScreenC');
  console.log('Open state' + openDialog);
  const handleSelect = (imgName: string) => {
    console.log('handleSelect ' + imgName);
    store.dispatch(setIcon({ position: openDialogId, icon: imgName }));
    // const payload =
    //   imgName.startsWith('http') || imgName.startsWith('/')
    //     ? imgName
    //     : `${basePath}${imgName}`;
    // dispatch({ type: actionType, payload });
    // onSelect?.(payload);

    setOpen(false);
    onClose?.();
  };

  useEffect(() => {
    setOpen(openProp);
    setOpenDialogId(index);
  }, [openProp, index]);

  return (
    <Dialog open={openDialog} onClose={handleClose}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flex: 1 }}>
            Select Icon
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box sx={{ p: 2 }}>
        {images.length === 0 ? (
          <Typography>No images provided</Typography>
        ) : (
          <ImageList variant="masonry" cols={4} gap={12}>
            {images.map((name) => {
              const src =
                name.startsWith('http') || name.startsWith('/')
                  ? name
                  : `${basePath}${name}`;
              return (
                <ImageListItem key={name} sx={{ cursor: 'pointer' }}>
                  <img
                    src={src}
                    alt={name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 8,
                      display: 'block',
                    }}
                    onClick={() => handleSelect(name)}
                  />
                  <Box
                    sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
                  >
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => handleSelect(name)}
                    >
                      Select
                    </Button>
                  </Box>
                </ImageListItem>
              );
            })}
          </ImageList>
        )}
      </Box>
    </Dialog>
  );
};

export default IconSelectroScreenC;
