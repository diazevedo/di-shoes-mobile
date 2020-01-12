import React from 'react';
import {
  SafeArea,
  Container,
  Logo,
  BasketContainer,
  ItemAmount,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation }) => {
  console.tron.log(navigation);
  return (
    <SafeArea>
      <Container>
        <BasketContainer onPress={() => navigation.navigate('Home')}>
          <Logo />
        </BasketContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemAmount>1</ItemAmount>
        </BasketContainer>
      </Container>
    </SafeArea>
  );
};

export default Header;
