import React from "react";
import './Playlist.css';
import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component{
    render(){
        return (
            <div className='play-list-container'>
                <input className='play-list-title' placeholder='New Playlist'></input>
                <div className='button-container'>
                    <button className='play-list-button'>Submit To Spotify</button>
                </div>
                <div className='play-list'>
                    <TrackList 
                        tracks={this.props.playlistTracks} 
                        onRemove={this.props.onRemove}
                        isRemoval={true}
                    />
                </div>
                <div className='button-container'>
                    <button className='play-list-button'>Submit To Spotify</button>
                </div>
            </div>
        );
    }
}

export default Playlist;