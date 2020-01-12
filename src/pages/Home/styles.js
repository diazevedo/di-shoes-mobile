import styled from 'styled-components/native';
import background from '../../assets/images/background.png';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const ImageBackground = styled.ImageBackground.attrs({
  source: background,
})`
  /* flex: 1; */
  height: 250px;
`;
