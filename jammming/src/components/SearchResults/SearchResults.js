import './SearchResults.css';
import React from 'react';
import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component{
    render(){
        return (
            <div id='SearchResults'>
                <TrackList
                    tracks={this.props.searchResults}
                    onAdd={this.props.onAdd}
                    isRemoval={false}
                />
            </div>
        );
    }
}

export default SearchResults;