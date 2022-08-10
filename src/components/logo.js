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
            height: 350,
            top: screenHeight / 2 - 170,
            left: screenWidth / 2 - 260,
            zIndex: 99
          }}
        />
        :
        ((pinkHeight !== 0) ?
          <img src='SCIPREC BLUE.png' alt='logo'
            style={{
              position: 'fixed',
              height: 350,
              top: screenHeight / 2 - 170,
              left: screenWidth / 2 - 260,
              zIndex: 99
            }}
            onClick={onReset}
          />
          :
          <img src='SCIPREC PINK.png' alt='logo'
            style={{
              position: 'fixed',
              height: 350,
              top: screenHeight / 2 - 170,
              left: screenWidth / 2 - 260,
              zIndex: 99
            }}
            onClick={onReset}
          />
        )
      }
    </>
  )
}