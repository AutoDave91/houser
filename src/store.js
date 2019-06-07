import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    houses: []
}

export const ADD_NAME = 'ADD_NAME';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const ADD_CITY = 'ADD_CITY';
export const ADD_STATE = 'ADD_STATE';
export const ADD_ZIP = 'ADD_ZIP';

function reducer(state=initialState, action){
    switch(action.type){
        case ADD_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ADD_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case ADD_CITY:
            return {
                ...state,
                city: action.payload
            }
        case ADD_STATE:
            return {
                ...state,
                state: action.payload
            }
        case ADD_ZIP:
            return {
                ...state,
                zip: action.payload
            }
    }
}

export default createStore(reducer);