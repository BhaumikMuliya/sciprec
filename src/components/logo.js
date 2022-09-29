export default function Logo(props) {
  const {
    pinkHeight,
    blueHeight,
    screenHeight,
    screenWidth,
    onReset
  } = props;

  return (
    <>
      {(pinkHeight !== 0 && blueHeight !== 0) ?
        <img src='SCIPREC TEXT BRAND.png' alt='logo'
          style={{
            position: 'fixed',
            height: screenWidth > 900 ? 350 : 150,
            top: screenWidth > 900 ? screenHeight / 2 - 170 : screenHeight / 2 - 73,
            left: screenWidth > 900 ? screenWidth / 2 - 260 : screenWidth / 2 - 110,
            zIndex: 99
          }}
        />
        :
        ((pinkHeight !== 0) ?
          <img src='SCIPREC BLUE.png' alt='logo'
            style={{
              position: 'fixed',
              height: screenWidth > 900 ? 350 : 150,
              top: screenWidth > 900 ? screenHeight / 2 - 170 : screenHeight / 2 - 73,
              left: screenWidth > 900 ? screenWidth / 2 - 260 : screenWidth / 2 - 110,
              zIndex: 99
            }}
            onClick={onReset}
          />
          :
          <img src='SCIPREC PINK.png' alt='logo'
            style={{
              position: 'fixed',
              height: screenWidth > 900 ? 350 : 150,
              top: screenWidth > 900 ? screenHeight / 2 - 170 : screenHeight / 2 - 73,
              left: screenWidth > 900 ? screenWidth / 2 - 260 : screenWidth / 2 - 110,
              zIndex: 99
            }}
            onClick={onReset}
          />
        )
      }
    </>
  )
}