import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './header';

function PinkBox(props) {
  return (
    <Box
      sx={{
        height: props.height,
        backgroundColor: '#f64b96',
      }}
      onMouseOver={props.onPinkHover}
    >
      {(props.height !== 0) && <Header />}
    </Box>
  );
}

export default PinkBox;