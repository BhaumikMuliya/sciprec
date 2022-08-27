import * as React from 'react';
import './eye-background.css';

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
      <div className='BackgroundImage'>
        <img
          src='outer-text.png'
          alt='outer-text'
          onLoad={handleOuterImage}
          className= 'OuterImage' 
          style={{
            position: 'fixed',
            height: '90%',
            top: '50%',
            left: '50%',
            marginTop: -outerImage.height / 2,
            marginLeft: -outerImage.width / 2,
          }}
        />
        <img
          src='inner-text.png'
          alt='inner-text'
          onLoad={handleInnerImage}
          className= 'InnerImage' 
          style={{
            position: 'fixed',
            height: '77%',
            top: '50%',
            left: '50%',
            marginTop: -innerImage.height / 2,
            marginLeft: -innerImage.width / 2,
          }}
        />
      </div>
    </div>
  );
}

export default EyeBackground;
