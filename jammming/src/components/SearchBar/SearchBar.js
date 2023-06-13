import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    render(){
        return(
            <div>
                <form id='SearchBar'>
                    <input placeholder='Enter a song, title or album'></input>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
