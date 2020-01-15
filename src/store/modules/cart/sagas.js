import { Alert } from 'react-native';

import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import formatPrice from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productAlreadyAdded = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  /* check stock*/
  const responseStock = yield call(api.get, `/stock/${id}`);
  const currentAmount = productAlreadyAdded ? productAlreadyAdded.amount : 0;
  // console.tron.log(responseStock);
  const amount = currentAmount + 1;

  if (amount > responseStock.data.amount) {
    Alert.alert('Amount out of stock');
    return;
  }

  if (productAlreadyAdded) {
    yield put(updateAmountSuccess(id, productAlreadyAdded.amount + 1));
  } else {
    //busco as infos do produto
    const response = yield call(api.get, `/products/${id}`);

    //o preco eh feito aqui mesmo, para manter compatibilidade
    const product = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    //submeto para o reducer mesmo, com a action que add o produto no carrinho
    yield put(addToCartSuccess(product));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const response = yield call(api.get, `/stock/${id}`);

  const stock = response.data.amount;

  if (amount > stock) {
    Alert.alert('Amount out of stock');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
