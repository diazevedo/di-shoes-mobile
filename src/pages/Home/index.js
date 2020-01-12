import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Cart" onPress={() => navigation.navigate('Cart')}></Button>
    </View>
  );
};

export default Home;
