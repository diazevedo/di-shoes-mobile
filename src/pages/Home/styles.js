import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const List = styled.FlatList`
  padding: 0px 20px 0px 20px;
  margin-top: 20px;
`;

export const ProductContainer = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  margin-top: 10px;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const ProductImage = styled.Image.attrs({ resizeMode: 'cover' })`
  margin-top: 20px;
  height: 250px;
  width: 300px;
`;

export const ProductName = styled.Text.attrs({ numberOfLines: 2 })`
  padding: 30px 10px 15px 10px;
  color: #000;
`;

export const ProductPrice = styled.Text`
  padding: 0px 10px;
  color: #000;
  font-size: 36px;
  font-weight: bold;
`;

export const ButtonAddProduct = styled(RectButton)`
  flex: 1;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
`;

export const WrapperIconAddProduct = styled.View`
  flex-direction: row;
  width: 75px;
  padding: 15px;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0, 0, 0, 0.1);
`;

export const TextAmount = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const TextAdd = styled.Text`
  flex: 1;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`;
