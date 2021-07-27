import { combineReducers } from "redux";

import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_SHOW_FAVOURITE, ADD_SEARCH_RESULT, ADD_TO_MOVIES, CLEAR_SEARCH, ADD_LOCAL_STORAGE } from "../actions";
const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourite: false
}
export function movies (state = initialMoviesState, action){
    // if(action.type==ADD_MOVIES){
    //     return {...state, list: action.movies}
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            state = {...state, list: action.movies}
            return state;
        case ADD_FAVOURITE:
            return { ...state, favourites: [action.movie, ...state.favourites]};
        case REMOVE_FAVOURITE:
            const id = state.favourites.indexOf(action.movie)
            state.favourites.splice(id, 1)
            return state;
        case SET_SHOW_FAVOURITE:
            state.showFavourite = action.val
            return state;
        case ADD_TO_MOVIES:
            var ck = true;
            state.list.forEach(obj=>{
                if(obj.Title===action.movie.Title){
                    ck = false;
                }
            })
            if(ck){
                state.list.push(action.movie)
            }
            localStorage.setItem('state', JSON.stringify(state))
            return state;
        case ADD_LOCAL_STORAGE:
            state = JSON.parse(localStorage.getItem('state'))
            state.showFavourite=false;
            return state
        default:
            return state;
    }
}

const initialSearchState = {
    result: {},
    showResult: false
}

export function addSearchResult (state = initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            state.showResult=true
            state.result=action.movies
            //console.log(action.movies)
            return state
        case CLEAR_SEARCH:
            state.showResult=false
            state.result=[]
            //console.log(action.movies)
            return state
        default:
            return state;
    }
}

const initialState = {
    movies: initialMoviesState,
    results: initialSearchState
}

// export default function rootReducer(state = initialState, action){
//     return {
//         movies: movies(state.movies, action),
//         result: search(state.result, action)
//     }
// }

export default combineReducers({
    movies,    //movies: movies
    addSearchResult
})
