import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import appReducer from './appReducer';
import cartReducer from './cartRreducer';
import productReducer from './productReducer';
import checkoutReducer from './checkoutReducer';
import searchReducer from './searchReducer';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import AccountReducer from './accountReducer';

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const cartConfig = {
    ...commonConfig,
    key: 'cartStore',
    whitelist: ['cartStore']
}

const accountConfig = {
    ...commonConfig,
    key: 'accountStore',
}

const rootReducer = combineReducers({
    app: appReducer,
    cart: persistReducer(cartConfig, cartReducer),
    product: productReducer,
    checkout: checkoutReducer,
    search: searchReducer,
    account: persistReducer(accountConfig, AccountReducer)
})

export default rootReducer