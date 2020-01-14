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

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage source={{ uri: item.image }} />
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
