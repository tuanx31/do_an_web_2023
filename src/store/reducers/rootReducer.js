import appReducer from './appReducer';
import { combineReducers } from 'redux';
import cartReducer from './cartRreducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer,
    product: productReducer
})

export default rootReducer