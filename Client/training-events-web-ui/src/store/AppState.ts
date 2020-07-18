import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {themeReducer} from "../services/theme/";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';

const combinedReducer = combineReducers({
    theme:themeReducer
})

let createdStore;
if (process.env.NODE_ENV === 'production') {
    createdStore = compose(applyMiddleware(thunk))(createStore);
} else {
    createdStore = compose(applyMiddleware(thunk, createLogger()))(createStore);
}

const AppState = createdStore(combinedReducer);

export default AppState;
