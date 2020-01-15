import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import formatPrice from '../../util/format';
import * as cartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  EmptyContainer,
  ProductContainer,
  TextEmpty,
  List,
  Product,
  FirstLine,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  WrapperFinalDetails,
  Button,
  WrapperAmount,
  SubTotal,
  AmountInput,
  Total,
  FinishOrderButton,
  TextFinish,
  TotalPrice,
} from './styles';

const Cart = ({ cart, total, updateAmountRequest, removeFromCart }) => {
  const removeProduct = id => removeFromCart(id);
  const increment = ({ id, amount }) => updateAmountRequest(id, amount + 1);

  const decrement = ({ id, amount }) => updateAmountRequest(id, amount - 1);

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" color="#979797" size={50}></Icon>
          <TextEmpty>Your cart is empty</TextEmpty>
        </EmptyContainer>
      ) : (
        <ProductContainer>
          <List
            data={cart}
            keyExtractor={cart => String(cart.id)}
            renderItem={({ item }) => (
              <Product>
                <FirstLine>
                  <ProductImage
                    source={{
                      uri: item.image,
                    }}
                  />

                  <ProductDetails>
                    <ProductName>{item.title}</ProductName>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <Button onPress={() => removeProduct(item.id)}>
                    <Icon name="delete-forever" size={30} color="#7159c1" />
                  </Button>
                </FirstLine>
                <WrapperFinalDetails>
                  <WrapperAmount>
                    <Button onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={24}
                        color="#7159c1"
                      />
                    </Button>

                    <AmountInput>{item.amount}</AmountInput>
                    <Button onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={24}
                        color="#7159c1"
                      />
                    </Button>
                  </WrapperAmount>

                  <SubTotal>{item.subTotal}</SubTotal>
                </WrapperFinalDetails>
              </Product>
            )}
          />
          <Total>Total</Total>
          <TotalPrice>{total}</TotalPrice>
          <FinishOrderButton>
            <TextFinish>finish order</TextFinish>
          </FinishOrderButton>
        </ProductContainer>
      )}
    </Container>
  );
};

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return product.price * product.amount + total;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
