
import fetch from 'isomorphic-fetch'

export const REQUEST_PLOT = 'REQUEST_PLOT'
export const RECEIVE_PLOT = 'RECEIVE_PLOT'
export const RECEIVE_RANDOM = 'RECEIVE_RANDOM'
export const REQUEST_RANDOM = 'REQUEST_RANDOM'
export const SET_LIMIT = 'SET_LIMIT'

// ------------------------------------------------------
// Data plotting
// ------------------------------------------------------

const requestPlottable = () => ({type:REQUEST_PLOT})
const receivePlottable = (data) => ({type:RECEIVE_PLOT, data})

export function fetchPlottable() {
    return dispatch => {
        dispatch(requestPlottable())
        return fetch(`/data`)
            .then(req => req.json())
            .then(json => dispatch(receivePlottable(json)))
    }
}

// ------------------------------------------------------
// Random data plotting
// ------------------------------------------------------

const requestRandom = () => ({type:REQUEST_RANDOM})
const receiveRandom = (data) => ({type:RECEIVE_RANDOM, data})

export function fetchRandom() {
    return dispatch => {
        dispatch(requestRandom())
        return fetch(`/random`)
            .then(req => req.json() )
            .then(json => dispatch(receiveRandom(json)))
    }
}

// ------------------------------------------------------
// update limit
// ------------------------------------------------------

export function setLimit(limit) {
    return {
        type: SET_LIMIT,
        limit
    }
}