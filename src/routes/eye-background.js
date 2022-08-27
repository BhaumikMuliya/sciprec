import * as React from 'react';
import './eye-background.css';
import { Link } from "react-router-dom";

function EyeBackground() {
  const [outerImage, setOuterImage] = React.useState({ height: 0, width: 0 })
  const [innerImage, setInnerImage] = React.useState({ height: 0, width: 0 })

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
            height: 150,
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
              height: '90%',
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
              height: '77%',
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
