import React, { Component } from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  List,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ButtonAddProduct,
  WrapperIconAddProduct,
  // IconAddProduct,
  TextAmount,
  TextAdd,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const { data } = await api.get('/products');

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    console.tron.log(products);
    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage source={{ uri: item.image }}></ProductImage>
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{item.price}</ProductPrice>

              <ButtonAddProduct>
                <WrapperIconAddProduct>
                  <Icon name="add-shopping-cart" size={20} color="#fff"></Icon>
                  <TextAmount>1</TextAmount>
                </WrapperIconAddProduct>

                <TextAdd>add to cart</TextAdd>
              </ButtonAddProduct>
            </ProductContainer>
          )}
        />
      </Container>
    );
  }
}

export default Home;

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home',
});
