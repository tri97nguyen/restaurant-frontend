
import * as ActionTypes from "./actionTypes"


export const Comments = (state = {
    errmes: null,
    comments: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            const cmts = action.payload
            console.log('hello world')
            console.log(cmts)
            return {errmes: null, comments: state.comments.concat(cmts)}
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload
            comment.id = state.comments.length
            comment.date = new Date().toISOString()
            console.log(`comment: ${comment}`)
            return {errmes: null, comments: state.comments.concat(comment)}
        case ActionTypes.COMMENTS_FAILED:
            return {isLoading: false, errmes: action.payload, comments: []}
        default:
            return state
    }
}