import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './header';
import { PinkImageContainer } from '../styled-components/falling-images';
import Images from '../constants/imagelist'

function PinkBox(props) {
  const {
    height,
    screenHeight,
    screenWidth,
    onPinkHover
  } = props;
  const [topImageList, setTopImageList] = React.useState([{
    key: 0,
    offset: 0,
    height: 0,
    image: Images?.pinkImages[0]
  }])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (topImageList.length > 3) {
        topImageList.shift();
      }
      const offset = Math.floor(Math.random() * screenWidth);
      const key = offset + Math.floor(Math.random() * 10000);
      const image = Images?.pinkImages[Math.floor(Math.random() * 3)];

      topImageList.push({ offset, key, image });
      setTopImageList([...topImageList])
    }, 1000);
    return () => clearInterval(interval);
  }, [screenWidth, topImageList]);

  return (
    <Box
      sx={{
        height: height,
        backgroundColor: '#f64b96',
      }}
      onMouseOver={onPinkHover}
    >
      {topImageList.map(({ key, offset, image }) => (
        <PinkImageContainer key={key} screenHeight={screenHeight} pinkHeight={height} offset={offset}>
          {image}
        </PinkImageContainer>
      ))}
      <Header />
    </Box>
  );
}

export default PinkBox;