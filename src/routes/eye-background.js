import * as React from 'react';
import './eye-background.css';
import { Link } from "react-router-dom";

function EyeBackground() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [outerImage, setOuterImage] = React.useState({ height: 0, width: 0 })
  const [innerImage, setInnerImage] = React.useState({ height: 0, width: 0 })

  React.useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const handleOuterImage = (event) => {
    setOuterImage({
      height: event.target.clientHeight,
      width: event.target.clientWidth
    })
  }
  const handleInnerImage = (event) => {
    setInnerImage({
      height: event.target.clientHeight,
      width: event.target.clientWidth
    })
  }

  return (
    <div>
      <Link to={'/'}>
        <img src='SCIPREC_LOGO_BLACK-removebg-preview.png' alt='logo'
          style={{
            height: screenWidth > 900 ? 150 : 75,
            position: 'fixed',
          }}
        />
      </Link>
      <div className='BackgroundImage'>
        <Link to={'/product'}>
          <img
            src='outer-text.png'
            alt='outer-text'
            onLoad={handleOuterImage}
            className='OuterImage'
            style={{
              position: 'fixed',
              height: screenWidth > 900 ? '90%' : '45%',
              top: '50%',
              left: '50%',
              marginTop: -outerImage.height / 2,
              marginLeft: -outerImage.width / 2,
            }}
          />
        </Link>
        <Link to={'/product'}>
          <img
            src='inner-text.png'
            alt='inner-text'
            onLoad={handleInnerImage}
            className='InnerImage'
            style={{
              position: 'fixed',
              height: screenWidth > 900 ? '77%' : '40%',
              top: '50%',
              left: '50%',
              marginTop: -innerImage.height / 2,
              marginLeft: -innerImage.width / 2,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default EyeBackground;
