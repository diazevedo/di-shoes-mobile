import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #191920;
`;

export const EmptyContainer = styled.View`
  border-radius: 4px;
  margin: 20px;
  padding: 20px 20px;
  background-color: #fff;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  padding-top: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const ProductContainer = styled.View`
  border-radius: 4px;
  margin: 20px;
  background-color: #fff;
`;

export const List = styled.FlatList``;

export const Product = styled.View`
  padding: 20px;
  margin-top: 10px;
`;

export const FirstLine = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled.Image.attrs({ resizeMode: 'cover' })`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.Text`
  margin-bottom: 10px;
  font-size: 14px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const WrapperFinalDetails = styled.View`
  margin-top: 10px;
  flex-direction: row;
  background-color: #eeeeee;
  padding: 10px 10px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperAmount = styled.View`
  flex-direction: row;
`;

export const AmountInput = styled.TextInput`
  width: 60px;
  background-color: #fff;
  margin: 0px 5px;
  border-radius: 4px;
`;

export const SubTotal = styled.Text`
  text-align: right;
  font-weight: bold;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity``;

export const Total = styled.Text`
  padding-top: 1px;
  font-size: 18px;
  text-align: center;
  color: #979797;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

export const FinishOrderButton = styled(RectButton)`
  padding-top: 15px;
  padding-bottom: 15px;
  margin: 10px;
  background-color: #7159c1;
  border-radius: 4px;
`;

export const TextFinish = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`;
