import * as ActionTypes from "./actionTypes"
import { DISHES } from "../shared/dishes"
import { BASE_URL } from "../shared/baseUrl";
import { PROMOTIONS } from "../shared/promotions";
export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, comment, author) => dispatch => {
    const newComment = {
        dishId, rating, comment, author
    }
    newComment.date = new Date().toISOString()
    fetch( BASE_URL + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) return response.json()
        else {
            throw new Error('some thing went wrong')
        }
    }, error => {throw error})
    .then(data => dispatch(addComment(data)))
    .catch(error => console.error(error))
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    fetch(BASE_URL + "dishes")
    .then(response => {
        if (response.ok) return response.json()
        else {
            throw new Error('Cannot retrieve dishes from server')
        }
    }, error => {throw Error(error.toString())})
    .then(data => dispatch(addDishes(data)))
    .catch(error => {dispatch(dishesFailed(error.message))})
    
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

export const fetchComments = () => dispatch => {
    fetch(BASE_URL + 'comments')
    .then(res => {
        if (res.ok)
            return res.json()
        else {
            console.log('response not ok')
            let error = new Error(`Error ${res.status}: ${res.statusText}`)
            error.response = res
            throw error
        }
    }, error => dispatch(commentsFailed(error.toString())))
    .then(comments => dispatch(addComments(comments)))
    .catch(error => {console.log('outer catch');dispatch(commentsFailed(error.message))})
    
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = errmes => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmes
})

export const fetchPromotion = () => dispatch => {
    dispatch(promotionLoading())
    fetch(BASE_URL + 'promotions')
    .then(res => {
        if (res.ok) return res.json()
        else {
            throw new Error(`Error ${res.status}: ${res.statusText}`)
        }
    }, error => {throw error})
    .then(promo => dispatch(addPromotion(promo)))
    .catch(error => dispatch(promotionFailed(error.toString())))
    
}

export const addPromotion = (promo) => ({
    type: ActionTypes.ADD_PROMOTION,
    payload: promo
})

export const promotionLoading = () => ({
    type: ActionTypes.PROMOTION_LOADING
    
})

export const promotionFailed = errmes => ({
    type: ActionTypes.PROMOTION_FAILED,
    payload: errmes
})