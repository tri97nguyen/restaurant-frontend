import * as ActionTypes from "./actionTypes"
import { DISHES } from "../shared/dishes"

export const addComment = (dishId, rating, comment, author) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        comment: comment,
        author: author
    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000)
}

export const dishesLoading = () => {
    return {type: ActionTypes.DISHES_LOADING}
}

export const addDishes = dishes => {
    return {
        type: ActionTypes.ADD_DISHES,
        payload: dishes
    }
}

export const dishesFailed = errmes => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmes
})