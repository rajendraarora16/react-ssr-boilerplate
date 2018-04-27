import { NOW_SHOWING_API_DATA, SHOW_TIMES_API_DATA } from './../constants/constants.js'

import { combineReducers } from 'redux'

const globalReducer = (state={nowShowing: [], showtimes: []}, action) => {
    console.log('action.type: ',action)
    switch(action.type) {

        case "NOW_DATA":
            return Object.assign({}, state, {nowShowing: action.payload})

        case "SHOW_TIME":
            return Object.assign({}, state, {showtimes: action.payload})    

        default:
            console.log('default reducer')    
            return state
    }
}

const global_data = combineReducers({
    globalReducer,
})

export default global_data
