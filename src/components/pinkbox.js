import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './header';
import { ImageContainer } from '../constants/image';

function PinkBox(props) {
  const [topImageList, setTopImageList] = React.useState([{ key: 0 }])
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
        <img src='CAPSULES-2 (1).png' alt='capsules'
          style={{ height: 100 }} />
      </ImageContainer>
      {(props.height !== 0) && <Header />}
    </Box>
  );
}

export default PinkBox;