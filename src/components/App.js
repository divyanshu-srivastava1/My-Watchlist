import React, { useCallback } from "react";
import {data} from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import addMovies from '../actions'
import {setShowFavourite, addFavourite, addLocalStorage} from '../actions'
var first_time=1;
class App extends React.Component{
  componentDidMount(){
    //make api call
    //dispath action

    this.props.store.subscribe(()=>{
      console.log('UPDATED')
      //localStorage.setItem('state', JSON.stringify(this.props.store.getState().movies))
      //console.log(localStorage.state);
      this.forceUpdate()
    })
    if(JSON.parse(localStorage.getItem('state')) !== null){
      this.props.store.dispatch(addLocalStorage())
      // this.props.store.dispatch(addMovies(JSON.parse(localStorage.getItem('state')).list))
      // JSON.parse(localStorage.getItem('state')).favourites.forEach(ele => {
      //   this.props.store.dispatch(addFavourite(ele))
      // });
    }
    // this.props.store.dispatch(addMovies(data))
    //console.log(this.props.store.getState());
  }
  isFavourite=(movie)=>{
    const {favourites} = this.props.store.getState().movies
    const id = favourites.indexOf(movie)
    if(id!=-1){
      return true
    }
    return false
  }
  handleChangeTab=(val)=>{
    this.props.store.dispatch(setShowFavourite(val))
    //console.log(this.props.store.getState());
  }
  render(){
    const { list, favourites, showFavourite } = this.props.store.getState().movies;  //{list, favourite}
    const displayMovies = showFavourite ? favourites : list
    return (
      <div className="movie-app">
        <Navbar store={this.props.store}/>
        <div className='main'>
          <div className='tabs'>
            <div className= {`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={()=>this.handleChangeTab(false)}>Movies</div>
            <div className= {`tab ${showFavourite ? 'active-tabs' : ''}`} onClick={()=>this.handleChangeTab(true)}>Favourites</div>
          </div>
          <div className='list'>
          {displayMovies.map((movie, id)=>(
              <MovieCard 
                movie={movie} 
                key={id} 
                dispatch={this.props.store.dispatch} 
                isFavourite={this.isFavourite(movie)}
                store={this.props.store}  
              />
            ))}
          </div>
          {displayMovies.length===0 ? <div className='no-movies'>No Movies to display !!</div> : ""}
        </div>
      </div>
    );
  }
}

export default App;
