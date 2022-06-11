import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserR'
import dishesReducer from "./dishes";
import dishesRank from "./dishesRankR";
import pointsReducer from "./pointsReducer";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    dishes: dishesReducer,
    currentUser: currentUserReducer,
    dishRank: dishesRank,
    points: pointsReducer
})

export default allReducers;