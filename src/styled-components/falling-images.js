import styled from 'styled-components'

export const PinkImageContainer = styled.div`
@keyframes pinkFalldown {
  0% { margin-top: -100px; }
  100% { margin-top: ${props => props.screenHeight === props.pinkHeight ? props.pinkHeight : props.pinkHeight - 100}px; }
}
margin-left: ${props => props.offset}px;
position: absolute;
animation-name: pinkFalldown;
animation-duration: ${props => props.screenHeight === props.pinkHeight ? 20 : 10}s;
`;

export const BlueImageContainer = styled.div`
@keyframes blueFalldown {
  0% { margin-top: ${props => props.screenHeight === props.blueHeight ? -100 : -25}px; }
  100% { margin-top: ${props => props.blueHeight}px; }
}
margin-left: ${props => props.offset}px;
position: absolute;
animation-name: blueFalldown;
animation-duration: ${props => props.screenHeight === props.blueHeight ? 20 : 10}s;
`;
