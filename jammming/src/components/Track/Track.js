import './Track.css';
import React from 'react';
class Track extends React.Component {

    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
      }
    renderAction(){
        if (this.props.isRemoval){
            return  <button className="add-button track-action" onClick={this.removeTrack}>-</button>
        }
        else{
            return <button className="add-button track-action" onClick={this.addTrack}>+</button>
        }

    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track);
    }
    render(){
        return(
            <div className="track">
                <h3 className='songTitle' name='title'>{this.props.track.name}</h3>
                <h4 className='songInfo' name='artist'>{this.props.track.artist}</h4>
                <h4 className='songInfo' name='album'>{this.props.track.album}</h4>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track;
