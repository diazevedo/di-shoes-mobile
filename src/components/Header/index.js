import React from 'react';
import { SafeArea, Container, Logo, BasketContainer } from './styles';

const Header = () => {
  return (
    <SafeArea>
      <Container>
        <Logo />
        <BasketContainer></BasketContainer>
      </Container>
    </SafeArea>
  );
};

export default Header;
