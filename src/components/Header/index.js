import React from 'react';
import { connect } from 'react-redux';
import {
  SafeArea,
  Container,
  Logo,
  BasketContainer,
  ItemAmount,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ amount, navigation }) => {
  return (
    <SafeArea>
      <Container>
        <BasketContainer onPress={() => navigation.navigate('Home')}>
          <Logo />
        </BasketContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemAmount>{amount}</ItemAmount>
        </BasketContainer>
      </Container>
    </SafeArea>
  );
};

export default connect(state => ({ amount: state.cart.length }))(Header);
