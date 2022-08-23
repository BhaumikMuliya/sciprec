import * as React from "react";
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from '../components/productCard';
import Products from "../constants/productlist";

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
    <div style={{ backgroundColor: 'black', textAlign: 'center' }}>
      <Typography variant="h3" style={{ fontFamily: 'Nunito', fontSize: '35px', color: 'white', fontWeight: 'bold', padding: '30px 0' }}>EYE DROPS</Typography>
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