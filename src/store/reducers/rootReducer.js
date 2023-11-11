import appReducer from './appReducer';
import { combineReducers } from 'redux';
import cartReducer from './cartRreducer';
import productReducer from './productReducer';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,
}

const cartConfig = {
    ...commonConfig,
    key: 'cartStore',
    whitelist: ['cartStore']
}


const rootReducer = combineReducers({
    app: appReducer,
    cart: persistReducer(cartConfig, cartReducer),
    product: productReducer
})

export default rootReducer