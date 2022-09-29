import * as React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <Grid container alignItems='center' justifyContent='space-between'
      style={{
        position: 'fixed',
        top: 0,
        paddingLeft: screenWidth > 900 ? 15 : 5,
        paddingRight: screenWidth > 900 ? 30 : 20,
        zIndex: 99
      }}>
      <Grid item>
        <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
          style={{
            height: screenWidth > 900 ? 150 : 75,
            marginTop: screenWidth > 900 ? 0 : 7,
          }}
        />
      </Grid>
      <Grid item style={{ textAlign: 'right' }}>
        <Typography variant={screenWidth > 900 ? "h3" : "subtitle1"} style={{ color: '#1a3fb7', textTransform: 'uppercase', fontWeight: 700 }}>Life Sciences</Typography>
        <Stack direction="row" spacing={screenWidth > 900 ? 2 : 1}>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#1a3fb7', fontWeight: 700 }}>About</Typography>
          </Link>
          <Link to={'/facility'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#1a3fb7', fontWeight: 700 }}>Product</Typography>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#1a3fb7', fontWeight: 700 }}>Presence</Typography>
          </Link>
          <Link to={'/contact'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#1a3fb7', fontWeight: 700 }}>Contact</Typography>
          </Link>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;