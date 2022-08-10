import { Grid, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Grid container alignItems='center' justifyContent='space-between'
      style={{
        position: 'fixed',
        bottom: 0,
        paddingLeft: 30,
        paddingRight: 15,
        zIndex: 99
      }}>
      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" style={{ color: '#f64b96', fontWeight: 700 }}>About</Typography>
          <Typography variant="h6" style={{ color: '#f64b96', fontWeight: 700 }}>Facility</Typography>
          <Typography variant="h6" style={{ color: '#f64b96', fontWeight: 700 }}>Contact</Typography>
        </Stack>
        <Typography variant="h3" style={{ color: '#f64b96', textTransform: 'uppercase', fontWeight: 700 }}>Research Lab</Typography>
      </Grid>
      <Grid item>
        <img src='SCIPREC_LOGO_BLACK-removebg-preview.png' alt='logo'
          style={{
            height: 150,
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Footer;