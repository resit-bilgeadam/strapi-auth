import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { SET_TOKEN, SET_USER } from "./types";

const INITIAL_STATE = {
    user: null,
    token: null,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {...state, token: action.payload};

        case SET_USER:
            return {...state, user: action.payload};
    
        default:
            return state;
    }
}


const enhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const store = createStore(reducer, enhancer);

export default store;

