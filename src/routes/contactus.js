import * as React from 'react';
import { Button, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from "react-router-dom";
import './contactus.css';
import DrawerMenu from "../components/drawerMenu";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'lightgray',
          background: 'white',
          borderRadius: '3px',
          padding: '0px 5px',
          '&.Mui-focused': {
            color: 'tomato',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'tomato',
          '&:hover': {
            background: 'tomato',
          },
          '&.Mui-disabled': {
            background: 'gray',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

const validationSchema = yup.object({
  name: yup
    .string('That doesn\'t look like a name')
    .required('Without name we can\'t help'),
  email: yup
    .string('Enter your email')
    .email('That doesn\'t look like a email')
    .required('Without name we can\'t communicate'),
  phone: yup
    .number('That doesn\'t look like a phone number')
    .typeError('That doesn\'t look like a phone number')
    .positive('A phone number can\'t start with a minus')
    .integer('A phone number can\'t include a decimal point')
    .min(8),
  message: yup
    .string('How can we help')
    .required('Please tell us something'),
});

const headerLinks = [
  {
    text: 'About',
    link: '/'
  },
  {
    text: 'Product',
    link: '/product'
  },
  {
    text: 'Presence',
    link: '/'
  }
]

function ContactUs() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [menuClick, setMenuClick] = React.useState(false);

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleMenuClick = () => {
    setMenuClick(true);
  };

  const handleMenuClose = () => {
    setMenuClick(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='ContactBackgroundImage'>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Link to={'/'}>
              <img src='SCIPREC_LOGO_WHITE-removebg-preview.png' alt='logo'
                style={{
                  height: screenWidth > 900 ? 150 : 75,
                }}
              />
            </Link>
          </Grid>
          {screenWidth > 900 ? null :
            <Grid item sm={2} xs={2} textAlign='center'>
              <IconButton
                aria-label="menu"
                id="menu-button"
                style={{ color: 'white' }}
                onClick={handleMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <DrawerMenu open={menuClick} list={headerLinks} screenWidth={screenWidth} handleClose={handleMenuClose} />
            </Grid>
          }
          {screenWidth > 900 ?
            <Grid item lg={4} md={4}>
              <Stack direction="row" style={{ margin: '0 20px' }} spacing={screenWidth > 900 ? 2 : 1} justifyContent='flex-end'>
                {headerLinks && headerLinks.map((item, index) => (
                  <Link key={index} to={item.link} style={{ textDecoration: 'none' }}>
                    <Typography variant={screenWidth > 900 ? "h6" : "caption"} style={{ color: '#fff', fontWeight: 700 }}>{item.text}</Typography>
                  </Link>
                ))}
              </Stack>
            </Grid> : null
          }
        </Grid>
        <div style={{ textAlign: 'center' }}>
          <Typography variant={screenWidth > 900 ? "h3" : "h4"} style={{
            color: 'white',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            margin: `${screenWidth > 900 ? '20px 0 20px' : '0 0 5px'}`,
          }}>
            Get in touch
          </Typography>
          <Typography variant={screenWidth > 900 ? "p" : "caption"} style={{ color: 'white' }}>
            <PhoneIcon sx={{ fontSize: 16 }} /> Phone : 91-2752-241548
          </Typography>
          <br />
          {screenWidth > 900 ? <br /> : null}
          <Typography variant={screenWidth > 900 ? "p" : "caption"} style={{ color: 'white' }}>
            <MailOutlineIcon sx={{ fontSize: 16 }} /> Email : <a href="mailto:info.sciprec@gmail.com" style={{ color: 'tomato', textDecoration: 'none' }}>
              info.sciprec@gmail.com</a>
          </Typography>
          <br />
          {screenWidth > 900 ? <br /> : null}
          <Typography variant={screenWidth > 900 ? "p" : "caption"} style={{ color: 'white' }}>
            <LocationOnIcon sx={{ fontSize: 16 }} /> Address: GIDC Estate, Plot No. 6/D/1, Shop No. 5/6, Opp.- Anand Tiles, Ambavadi, Wadhwan, Surendranagar, Gujarat, 363035
          </Typography>
          <br />
          {screenWidth > 900 ? <br /> : null}
          <Stack direction="row" spacing={screenWidth > 900 ? 2 : 1} justifyContent='center' style={{ margin: `${screenWidth > 900 ? '0 0 30px' : '0 0 20px'}` }}>
            <Typography variant={screenWidth > 900 ? "p" : "caption"} style={{ color: 'white' }}>Follow us: </Typography>
            <IconButton
              color="error"
              aria-label="facebook"
              onClick={() => window.open('https://www.facebook.com/scipreclifesciences/')}>
              <FacebookIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              color="error"
              aria-label="instagram"
              onClick={() => window.open('https://www.instagram.com/scipreclifesciences/')}>
              <InstagramIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Stack>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Grid container columnSpacing={7} justifyContent='center'>
            <Grid item lg={4} mg={4} sm={5} xs={11}>
              <TextField
                id="name"
                name="name"
                label="YOUR NAME*"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: `${screenWidth > 900 ? '25px' : '10px'}` }}
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name} />
              <TextField
                id="email"
                name="email"
                label="YOUR EMAIL*"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: `${screenWidth > 900 ? '25px' : '10px'}` }}
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email} />
              <TextField
                id="phone"
                name="phone"
                label="YOUR PHONE"
                variant="outlined"
                fullWidth
                color="error"
                style={{ marginBottom: `${screenWidth > 900 ? '25px' : '10px'}` }}
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone} />
            </Grid>
            <Grid item lg={4} mg={4} sm={5} xs={11}>
              <TextField
                id="message"
                name="message"
                label="YOUR MESSAGE*"
                variant="outlined"
                fullWidth
                color="error"
                multiline
                rows={screenWidth > 900 ? 8 : 3}
                style={{ marginBottom: '25px' }}
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message} />
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Button
              disabled={formik.values.name === '' || formik.values.email === '' || formik.values.message === ''}
              variant="contained"
              type='submit'
              style={{ fontSize: `${screenWidth > 900 ? '14px' : '12px'}` }}>
              Send Message
            </Button>
          </Grid>
        </form>
      </div>
    </ThemeProvider >
  );
}

export default ContactUs;