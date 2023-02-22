import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from './../features/Counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTIONS_COMPOSE__ || compose;
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;