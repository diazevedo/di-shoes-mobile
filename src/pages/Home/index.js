import React from 'react';
import { View, Text, Button } from 'react-native';

import { Container, ImageBackground } from './styles';

const Home = ({ navigation }) => {
  return (
    <Container>
      <Text>Home</Text>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')}></Button>
    </Container>
  );
};

export default Home;

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
});
