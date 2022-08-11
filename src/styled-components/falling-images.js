import styled from 'styled-components'

export const PinkImageContainer = styled.div`
@keyframes pinkFalldown {
  0% { margin-top: -100px; }
  100% { margin-top: ${props => props.screenHeight === props.pinkHeight ? props.pinkHeight : props.pinkHeight - 100}px; }
}
margin-left: ${props => props.offset}px;
position: absolute;
animation-name: pinkFalldown;
animation-duration: ${props => props.screenHeight === props.pinkHeight ? 10 : 5}s;
`;

export const BlueImageContainer = styled.div`
@keyframes blueFalldown {
  0% { margin-top: ${props => props.screenHeight === props.blueHeight ? -100 : 0}px; }
  100% { margin-top: ${props => props.blueHeight}px; }
}
margin-left: ${props => props.offset}px;
position: absolute;
animation-name: blueFalldown;
animation-duration: ${props => props.screenHeight === props.blueHeight ? 10 : 5}s;
`;
