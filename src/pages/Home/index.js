import React, { Component } from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import formatPrice from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

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
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      amount: 0,
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <ProductContainer>
              <ProductImage source={{ uri: item.image }} />
              <ProductName>{item.title}</ProductName>
              <ProductPrice>{item.priceFormatted}</ProductPrice>

              <ButtonAddProduct onPress={() => this.handleAddProduct(item.id)}>
                <WrapperIconAddProduct>
                  <Icon name="add-shopping-cart" size={20} color="#fff"></Icon>
                  <TextAmount>{amount[item.id] || 0} </TextAmount>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
