import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';
import currentUserReducer from './currentUserR'
import dishesRank from "./dishesRankR";

const allReducers = combineReducers({
    isLogged: loggedReducer,
    currentUser: currentUserReducer,
    dishRank: dishesRank,
})

export default allReducers;