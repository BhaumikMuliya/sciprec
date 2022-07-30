import * as React from 'react';
import PinkBox from './components/pinkbox';
import BlueBox from './components/bluebox';

export default function App() {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [pinkHeight, setPinkHeight] = React.useState(0);
  const [blueHeight, setBlueHeight] = React.useState(0);

  React.useEffect(() => {
    setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth)
    setPinkHeight(screenHeight / 2)
    setBlueHeight(screenHeight / 2)
  }, [screenHeight])

  const onPinkHover = () => {
    setPinkHeight(screenHeight)
    setBlueHeight(0)
  }

  const onBlueHover = () => {
    setBlueHeight(screenHeight)
    setPinkHeight(0)
  }

  const onReset = () => {
    setPinkHeight(screenHeight / 2)
    setBlueHeight(screenHeight / 2)
  }

  return (
    <>
      <PinkBox
        height={pinkHeight}
        onPinkHover={onPinkHover}
        onReset={onReset}
      />
      {(pinkHeight !== 0 && blueHeight !== 0) ?
        <img src='SCIPREC TEXT BRAND.png' alt='logo'
          style={{
            position: 'fixed',
            height: 350,
            top: screenHeight / 2 - 170,
            left: screenWidth / 2 - 262,
          }}
        />
        :
        ((pinkHeight !== 0) ?
          <img src='SCIPREC BLUE.png' alt='logo'
            style={{
              position: 'fixed',
              height: 350,
              top: screenHeight / 2 - 170,
              left: screenWidth / 2 - 262,
              '@media (max-width: 550px)': {
                height: 250,
                top: screenHeight / 2 - 120,
                left: screenWidth / 2 - 262,
              },
            }}
            onClick={onReset}
          />
          :
          <img src='SCIPREC PINK.png' alt='logo'
            style={{
              position: 'fixed',
              height: 350,
              top: screenHeight / 2 - 170,
              left: screenWidth / 2 - 262,
            }}
            onClick={onReset}
          />
        )
      }
      <BlueBox
        height={blueHeight}
        onBlueHover={onBlueHover}
        onReset={onReset}
      />
    </>
  );
}
