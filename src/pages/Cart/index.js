import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductContainer,
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

const products = [
  {
    id: 1,
    title:
      'ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENSADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title:
      'ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENSADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS ADIDAS ORIGINALS NMD_R1 WOMENS',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];
const Cart = ({ cart }) => {
  return (
    <Container>
      <ProductContainer>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <FirstLine>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                />

                <ProductDetails>
                  <ProductName>ADIDAS ORIGINALS NMD_R1 WOMENS </ProductName>
                  <ProductPrice>R$100.00</ProductPrice>
                </ProductDetails>
                <Button>
                  <Icon name="delete-forever" size={30} color="#7159c1" />
                </Button>
              </FirstLine>
              <WrapperFinalDetails>
                <WrapperAmount>
                  <Button>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#7159c1"
                    />
                  </Button>

                  <AmountInput></AmountInput>
                  <Button>
                    <Icon name="add-circle-outline" size={24} color="#7159c1" />
                  </Button>
                </WrapperAmount>

                <SubTotal>R$539.70</SubTotal>
              </WrapperFinalDetails>
            </Product>
          )}
        />
        <Total>Total</Total>
        <TotalPrice>R$7878</TotalPrice>
        <FinishOrderButton>
          <TextFinish>finish order</TextFinish>
        </FinishOrderButton>
      </ProductContainer>
    </Container>
  );
};

export default Cart;
