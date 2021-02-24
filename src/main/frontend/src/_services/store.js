import {combineReducers, createStore} from "redux";
import cardsReducer from "./reducers/cards-reducer";

let reducers = combineReducers({
    cardsPage: cardsReducer,
})

let store = createStore(reducers)

export default store
