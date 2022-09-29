import * as React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const [screenWidth, setScreenWidth] = React.useState(0);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  return (
    <Grid container alignItems='center' justifyContent='space-between'
      style={{
        position: 'fixed',
        bottom: 0,
        paddingLeft: screenWidth > 900 ? 30 : 20,
        paddingRight: screenWidth > 900 ? 15 : 5,
        zIndex: 99
      }}>
      <Grid item>
        <Stack direction="row" spacing={screenWidth > 900 ? 2 : 1}>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#f64b96', fontWeight: 700 }}>About</Typography>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#f64b96', fontWeight: 700 }}>Facility</Typography>
          </Link>
          <Link to={'/contact'} style={{ textDecoration: 'none' }}>
            <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#f64b96', fontWeight: 700 }}>Contact</Typography>
          </Link>
        </Stack>
        <Typography variant={screenWidth > 900 ? "h3" : "subtitle1"} style={{ color: '#f64b96', textTransform: 'uppercase', fontWeight: 700 }}>Research Lab</Typography>
      </Grid>
      <Grid item>
        <img src='SCIPREC_LOGO_BLACK-removebg-preview.png' alt='logo'
          style={{
            height: screenWidth > 900 ? 150 : 70,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Footer;