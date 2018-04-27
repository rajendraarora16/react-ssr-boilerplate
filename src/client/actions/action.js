import { NOW_SHOWING_API_DATA } from '../constants/constants'

export function getNowShowing(data) {
    return {
        type: "NOW_SHOWING_API_DATA",
        payload: data
    }
}

export function getShowTimes(data) {
    return {
        type: "SHOW_TIMES_API_DATA",
        payload: data
    }
}

export function nowShowingFetch() {
    return function(dispatch) {
        console.log('now showing')
        // DE_Trending_Movie_NS.getNowShowingData().then(data => {
        //     return dispatch(getNowShowing(data));
        // }).catch((err) => console.log('Error while fetching nowshowing data: ', err));
    }
} 

export function getShowtimesFetch() {
    return function(dispatch) {
        console.log('showtimes')
        // DE_GET_Showtimes_By_Event.getShowTimesData().then(data => {
        //     return dispatch(getShowTimes(data));
        // }).catch((err) => console.log('Error while fetching nowshowing data: ', err));
    }
}
