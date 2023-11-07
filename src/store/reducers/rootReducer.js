import appReducer from './appReducer';
import { combineReducers } from 'redux';
import cartReducer from './cartRreducer';

const rootReducer = combineReducers({
    app: appReducer,
    cart: cartReducer
})

export default rootReducer