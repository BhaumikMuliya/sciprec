import * as React from 'react';
import Box from '@mui/material/Box';
import Footer from './footer';
import { BlueImageContainer } from '../styled-components/falling-images';
import Images from '../constants/imagelist'

function BlueBox(props) {
  const {
    blueHeight,
    screenHeight,
    screenWidth,
    onBlueHover
  } = props;
  const [topImageList, setTopImageList] = React.useState([])

  React.useEffect(() => {
    setTopImageList([])
  }, [blueHeight]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const maxImageOnScreen = Math.floor(blueHeight / 80);
      if (topImageList.length > maxImageOnScreen) {
        topImageList.shift();
      }
      const offset = Math.floor(Math.random() * screenWidth - 50);
      const key = offset + Math.floor(Math.random() * 10000);
      const image = Images?.blueImages[Math.floor(Math.random() * 5)];
      const size = Math.floor(Math.random() * (125 - 50) + 50);

      topImageList.push({ offset, key, image, size });
      setTopImageList([...topImageList])
    }, 1000);
    return () => clearInterval(interval);
  }, [blueHeight, screenWidth, topImageList]);

  return (
    <Box
      sx={{
        height: blueHeight,
        backgroundColor: '#1a3fb7',
      }}
      onMouseOver={onBlueHover}
    >
      {topImageList.map(({ key, offset, image, size }) => (
        <BlueImageContainer key={key} screenHeight={screenHeight} blueHeight={blueHeight} offset={offset}>
          <img src={image} alt='research-lab' style={{ height: size }} />
        </BlueImageContainer>
      ))}
      <Footer />
    </Box>
  );
}

export default BlueBox;