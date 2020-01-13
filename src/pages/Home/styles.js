import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
`;

export const List = styled.FlatList`
  padding: 10px 20px;
`;

export const ProductContainer = styled.View`
  background-color: #fff;
  padding: 20px;
  margin-top: 15px;
  border-radius: 4px;
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
  /* padding: 10px 20px; */
  padding: 0px 10px;
  color: #000;
  font-size: 36px;
  font-weight: bold;
`;

export const ButtonAddProduct = styled.TouchableOpacity`
  flex: 1;
  margin-top: 15px;
  width: 340px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #7159c1;
  border-radius: 4px;
`;

export const WrapperIconAddProduct = styled.View`
  flex-direction: row;
  padding: 15px;
  align-items: center;
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
