import styled from 'styled-components/native';
import logo from '../../assets/images/Logo.png';

export const SafeArea = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background-color: #000;
`;

export const Container = styled.View`
  background-color: #000;
  flex: 1;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image.attrs({ source: logo, reziseMode: 'cover' })``;

export const BasketContainer = styled.TouchableOpacity``;
