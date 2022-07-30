import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from './footer';

function BlueBox(props) {
  return (
    <Box
      sx={{
        height: props.height,
        backgroundColor: '#1a3fb7',
      }}
      onMouseOver={props.onBlueHover}
    >
      {(props.height !== 0) && <Footer />}
    </Box>
  );
}

export default BlueBox;