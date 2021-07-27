//Action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const ADD_LOCAL_STORAGE = 'ADD_LOCAL_STORAGE'

//Action creators
export default function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return {
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourite(val){
    return {
        type: SET_SHOW_FAVOURITE,
        val
    }
}

export function handleSearch(key){
    const url = `https://www.omdbapi.com/?apikey=1e7d10fb&t=${key}`
    
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movies=>{
            dispatch(addSearchResult(movies))
        })
    }
}

export function addSearchResult(movies){
    return {
        type: ADD_SEARCH_RESULT,
        movies
    }
}

export function AddtoMovies(movie){
    return {
        type: ADD_TO_MOVIES,
        movie
    }
}

export function clearSearch(){
    return {
        type: CLEAR_SEARCH,
    }
}

export function addLocalStorage(){
    return {
        type: ADD_LOCAL_STORAGE,
    }
}