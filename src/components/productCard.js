import * as React from 'react';
import { Typography } from "@mui/material";

function ProductCard(props) {
  const [hover, setHover] = React.useState(false);

  return (
    <div style={{ padding: '10px' }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <img src={props.image} alt="" width='100%' />
      <div style={{ backgroundColor: 'white', width: '100%', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <Typography variant="h6" style={{
          fontFamily: 'Nunito',
          fontSize: '20px',
          padding: '5px 0',
          textAlign: 'center',
          fontWeight: 'bold',
          letterSpacing: hover ? '4px' : '0',
          transition: 'all .2s linear'
        }}>{props.text}</Typography>
      </div>
    </div>
  );
}

export default ProductCard;