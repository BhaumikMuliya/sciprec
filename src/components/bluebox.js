import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from './footer';
import { ImageContainer } from '../constants/image';

function BlueBox(props) {
  const {
    height,
    onBlueHover
  } = props;

  return (
    <Box
      sx={{
        height: height,
        backgroundColor: '#1a3fb7',
      }}
      onMouseOver={onBlueHover}
    >
      <ImageContainer>
      <img src='WAVE DESIGN 2.png' alt='capsules'
          style={{ height: 100 }} />
      </ImageContainer>
      {(props.height !== 0) && <Footer />}
    </Box>
  );
}

export default BlueBox;