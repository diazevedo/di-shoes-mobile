import styled from 'styled-components/native';
import logo from '../../assets/images/logo-rocket.png';

export const SafeArea = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background-color: #000;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  padding: 20px;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({ source: logo, resizeMode: 'cover' })`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemAmount = styled.Text`
  color: #fff;
  position: absolute;
  text-align: center;
  background-color: #6b52ae;
  top: -8px;
  right: -8px;
  min-height: 18px;
  min-width: 18px;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
