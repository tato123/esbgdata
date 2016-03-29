import {combineReducers} from 'redux'
import * as types from '../actions'

const fvalues = (state={data:[], limit: 5}, action ) => {
    switch(action.type) {
        case types.REQUEST_PLOT:
        case types.REQUEST_RANDOM:
            return Object.assign({}, state, {
                fetch: true
            })
        case types.RECEIVE_PLOT:
        case types.RECEIVE_RANDOM: 
            return Object.assign({}, state, {
                fetch: false,
                data: action.data
            })
        case types.SET_LIMIT:
            return Object.assign({}, state, {
                limit: action.limit
            })
        default: 
            return state;
    }
}

const dataApp = combineReducers({
    fvalues
})

export default dataApp