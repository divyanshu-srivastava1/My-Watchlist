import React from "react";
import { addFavourite, removeFavourite } from "../actions";

class MovieCard extends React.Component {
    handleFavourite=(movie)=>{
        const {dispatch} = this.props
        dispatch(addFavourite(movie))
        localStorage.setItem('state', JSON.stringify(this.props.store.getState().movies))
        //console.log(this.props.store.getState())
    }
    handleUnfavourite=(movie)=>{
        const {dispatch} = this.props
        dispatch(removeFavourite(movie))
        localStorage.setItem('state', JSON.stringify(this.props.store.getState().movies))
        //console.log(this.props.store.getState())
    }
    render() {
        const {movie, isFavourite} = this.props;
        return (
            <div className="movie-card">
                <div className='left'>
                    <img alt='movie-poster' src={movie.Poster}/>
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title} <span style={{fontWeight: 'normal', fontStyle: 'italic'}}>({movie.Year})</span></div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {
                            isFavourite
                            ? <button className='unfavourite-btn' onClick={()=>this.handleUnfavourite(movie)}>Unfavourite</button>
                            : <button className='favourite-btn' onClick={()=>this.handleFavourite(movie)}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;
