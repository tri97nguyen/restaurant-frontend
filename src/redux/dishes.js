import {DISHES} from '../shared/dishes'
import * as actionTypes from "./actionTypes"
export const Dishes = (state = {
    dishes: [],
    isLoading: true,
    errMess: null
}, action) => {
    switch(action.type) {
        case actionTypes.ADD_DISHES:
            return {isLoading: false, errMess: null, dishes: action.payload}
        case actionTypes.DISHES_LOADING:
            return {isLoading: true, errMess: null, dishes: []}
        case actionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload }
        default:
            return state
    }
}