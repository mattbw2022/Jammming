import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }


    handleNameChange(e){
        this.props.onNameChange(e.target.value)
    }

    render(){
        return (
            <div className='play-list-container'>
                <input className='play-list-title' onChange={this.handleNameChange} placeholder='New Playlist'></input>
                <div className='play-list'>
                    <TrackList 
                        tracks={this.props.playlistTracks} 
                        onRemove={this.props.onRemove}
                        isRemoval={true}
                    />
                </div>
                <div className='button-container'>
                    <button className='play-list-button' onClick={this.props.onSave}>Submit To Spotify</button>
                </div>
            </div>
        );
    }
}

export default Playlist;