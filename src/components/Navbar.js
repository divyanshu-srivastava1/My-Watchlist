import React from "react";
import { handleSearch, AddtoMovies, clearSearch } from "../actions";

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchString: '',
        }
    }
    handleChange=(e)=>{
        this.setState({
            searchString: e.target.value
        })
    }
    handleSearch=()=>{
        this.props.store.dispatch(handleSearch(this.state.searchString))
    }
    handleAddtoMovies=()=>{
        this.props.store.dispatch(AddtoMovies(this.props.store.getState().addSearchResult.result))
        this.props.store.dispatch(clearSearch())
    }
    handleEnter=(e)=>{
        if(e.code==="Enter"){
            console.log(e.code)
            this.handleSearch()
        }
    }
    render() {
        const { result, showResult } = this.props.store.getState().addSearchResult;
        return (
            <div className="nav">
                <div className='search-container'>
                    <input onChange={this.handleChange} onKeyDown={this.handleEnter}/>
                    <button className='search-btn' onClick={this.handleSearch}>Search</button>
                </div>
                {
                showResult &&
                <div className='search-results'>
                    <div className='search-result'>
                        <img src={result.Poster} alt='search-pic' />
                        <div className='movie-info'>
                            <span>{result.Title}</span>
                            <button onClick={this.handleAddtoMovies}>Add to movies</button>
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Navbar;
