import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './header';
import { ImageContainer } from '../constants/image';

function PinkBox(props) {
  const {
    height,
    onPinkHover
  } = props;

  return (
    <Box
      sx={{
        height: height,
        backgroundColor: '#f64b96',
      }}
      onMouseOver={onPinkHover}
    >
      <ImageContainer
        height={height}>
        *
      </ImageContainer>
      {(props.height !== 0) && <Header />}
    </Box>
  );
}

export default PinkBox;