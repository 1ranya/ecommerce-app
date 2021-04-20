import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { productDetailsReducer, productReducer } from './reducers/ProductReducers'

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
};
const reducer = combineReducers({
    productList: productReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Allow using the redux devtools 
const store = createStore(
    reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk))
);

export default store;