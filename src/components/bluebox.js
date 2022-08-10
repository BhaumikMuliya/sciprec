import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from './footer';
import { BlueImageContainer } from '../styled-components/falling-images';
import Images from '../constants/imagelist'

function BlueBox(props) {
  const {
    height,
    screenHeight,
    screenWidth,
    onBlueHover
  } = props;
  const [topImageList, setTopImageList] = React.useState([{
    key: 0,
    offset: 0,
    height: 0,
    image: Images?.blueImages[0]
  }])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (topImageList.length > 3) {
        topImageList.shift();
      }
      const offset = Math.floor(Math.random() * screenWidth);
      const key = offset + Math.floor(Math.random() * 10000);
      const image = Images?.blueImages[Math.floor(Math.random() * 3)];

      topImageList.push({ offset, key, image });
      setTopImageList([...topImageList])
    }, 1000);
    return () => clearInterval(interval);
  }, [screenWidth, topImageList]);

  return (
    <Box
      sx={{
        height: height,
        backgroundColor: '#1a3fb7',
      }}
      onMouseOver={onBlueHover}
    >
      {topImageList.map(({ key, offset, image }) => (
        <BlueImageContainer key={key} screenHeight={screenHeight} blueHeight={height} offset={offset}>
          {image}
        </BlueImageContainer>
      ))}
      <Footer />
    </Box>
  );
}

export default BlueBox;