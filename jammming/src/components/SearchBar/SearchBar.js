import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term : ""};
        this.search = this.search.bind(this);
        this.handleTermChange =this.handleTermChange.bind(this);
    }
    search(){
        this.props.onSearch(this.state.term);
        console.log('search hit');
        console.log(this.state.term);
    }

    handleTermChange(e){
        this.setState({term: e.target.value})
    }

    render(){
        return(
            <div id="SearchBar">
                    <input placeholder='Enter a song, title or album' onChange={this.handleTermChange}></input>
                    <button onClick={this.search}>Search</button>
            </div>
        );
    }
}

export default SearchBar;
