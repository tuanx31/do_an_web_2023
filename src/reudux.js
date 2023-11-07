import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const reduxCustomize = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}

export default reduxCustomize;
