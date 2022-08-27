import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './header';
import { PinkImageContainer } from '../styled-components/falling-images';
import Images from '../constants/imagelist'

function PinkBox(props) {
  const {
    pinkHeight,
    screenHeight,
    screenWidth,
    onPinkHover
  } = props;
  const [topImageList, setTopImageList] = React.useState([])

  React.useEffect(() => {
    setTopImageList([])
  }, [pinkHeight]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const maxImageOnScreen = Math.floor(pinkHeight / 60);
      if (topImageList.length > maxImageOnScreen) {
        topImageList.shift();
      }
      const offset = Math.floor(Math.random() * screenWidth - 50);
      const key = offset + Math.floor(Math.random() * 10000);
      const image = Images?.pinkImages[Math.floor(Math.random() * 4)];
      const size = Math.floor(Math.random() * (125 - 50) + 50);

      topImageList.push({ offset, key, image, size });
      setTopImageList([...topImageList])
    }, 1000);
    return () => clearInterval(interval);
  }, [pinkHeight, screenWidth, topImageList]);

  return (
    <Box
      sx={{
        height: pinkHeight,
        backgroundColor: '#f64b96',
      }}
      onMouseOver={onPinkHover}
    >
      {topImageList.map(({ key, offset, image, size }) => (
        <PinkImageContainer key={key} screenHeight={screenHeight} pinkHeight={pinkHeight} offset={offset}>
          <img src={image} alt='life-sciences' style={{ height: size }} />
        </PinkImageContainer>
      ))}
      <Header />
    </Box>
  );
}

export default PinkBox;