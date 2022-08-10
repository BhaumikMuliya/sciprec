import { Grid, Stack, Typography } from "@mui/material";

function Header() {
  return (
    <Grid container alignItems='center' justifyContent='space-between'
      style={{
        position: 'fixed',
        top: 0,
        paddingLeft: 15,
        paddingRight: 30,
        zIndex: 99
      }}>
      <Grid item>
        <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
          style={{
            height: 150,
          }}
        />
      </Grid>
      <Grid item style={{ textAlign: 'right' }}>
        <Typography variant="h3" style={{ color: '#1a3fb7', textTransform: 'uppercase', fontWeight: 700 }}>Life Sciences</Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" style={{ color: '#1a3fb7', fontWeight: 700 }}>About</Typography>
          <Typography variant="h6" style={{ color: '#1a3fb7', fontWeight: 700 }}>Product</Typography>
          <Typography variant="h6" style={{ color: '#1a3fb7', fontWeight: 700 }}>Presence</Typography>
          <Typography variant="h6" style={{ color: '#1a3fb7', fontWeight: 700 }}>Contact</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Header;