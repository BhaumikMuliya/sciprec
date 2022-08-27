import * as React from "react";
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from '../components/productCard';
import Products from "../constants/productlist";
import { Link } from "react-router-dom";

function Product() {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState('');
  const [text, setText] = React.useState('');

  const handleClickOpen = (props) => {
    setImage(props.image);
    setText(props.text);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ backgroundColor: 'black' }}>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Link to={'/'}>
            <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
              style={{
                height: 150,
              }}
            />
          </Link>
        </Grid>
        <Grid item lg={3} md={3} sm={3} xs={3}>
          <Typography variant="h3" style={{ textAlign: 'center', fontFamily: 'Nunito', fontSize: '35px', color: 'white', fontWeight: 'bold', padding: '30px 0' }}>EYE DROPS</Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={4}>
          <Stack direction="row" spacing={2} justifyContent='flex-end'>
            <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>About</Typography>
            <Link to={'/facility'}>
              <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>Product</Typography>
            </Link>
            <Typography variant="h6" style={{ color: '#fff', fontWeight: 700 }}>Presence</Typography>
            <Typography variant="h6" style={{ color: '#fff', fontWeight: 700, marginRight: '20px' }}>Contact</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid container>
        {Products.map((item, index) =>
          <Grid key={index} item lg={4} md={6} sm={6} xs={12} onClick={() => handleClickOpen(item)}>
            <ProductCard {...item} />
          </Grid>
        )}
      </Grid>
      <Dialog
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {text}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <img src={image} alt="" width='100%' />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Product;