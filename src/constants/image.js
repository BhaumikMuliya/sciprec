import styled from 'styled-components'

export const ImageContainer = styled.div`
@keyframes falldown {
  0% { margin-top: -100px; }
  100% { margin-top: ${(props) => props.height - 100}px; }
}
position: absolute;
z-index: 99;
font-size: 40px;
animation-name: falldown;
animation-duration: 4s;
`;