import {PROMOTIONS} from '../shared/promotions'
import { ADD_PROMOTION, PROMOTION_LOADING, PROMOTION_FAILED } from './actionTypes'

export const Promotions = (state = {
    errMes: null,
    isLoading: true,
    promotion: []
}, action) => {
    switch(action.type) {
        case ADD_PROMOTION:
            console.log("adding promotion. purported be third")
            console.log(action.payload)
            return {isLoading: false, errMes: null, promotion: action.payload}
        case PROMOTION_LOADING:
            console.log("loading action. Purported to be second")
            return {...state, isLoading: true}
        case PROMOTION_FAILED:
            return {errMess: action.payload, isLoading: false, promotion: []}
        default:
            console.log("default action. Supposed to be first")
            return state
    }
}