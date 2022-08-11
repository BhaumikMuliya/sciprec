import * as React from 'react';
import PinkBox from './components/pinkbox';
import BlueBox from './components/bluebox';
import Logo from './components/logo';

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

  window.onresize = () => {
    setScreenHeight(window.innerHeight)
  }

  return (
    <div style={{ width: '100%' }}>
      {pinkHeight !== 0 &&
        <PinkBox
          pinkHeight={pinkHeight}
          screenHeight={screenHeight}
          screenWidth={screenWidth}
          onPinkHover={onPinkHover}
        />}
      <Logo
        pinkHeight={pinkHeight}
        blueHeight={blueHeight}
        screenHeight={screenHeight}
        screenWidth={screenWidth}
        onReset={onReset}
      />
      {blueHeight !== 0 &&
        <BlueBox
          blueHeight={blueHeight}
          screenHeight={screenHeight}
          screenWidth={screenWidth}
          onBlueHover={onBlueHover}
        />}
    </div>
  );
}
