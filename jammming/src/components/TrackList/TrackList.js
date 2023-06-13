import './TrackList.css';
import Track from '../Track/Track';
import React from 'react';

class TrackList extends React.Component{
    render(){
        return(
            <>
            {this.props.tracks.map((song) =>{
                return (
                    <Track 
                        key={song.id}
                        track={song}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.isRemoval}
                    />
                )
            })}
            </>
        )
    }
}

export default TrackList;