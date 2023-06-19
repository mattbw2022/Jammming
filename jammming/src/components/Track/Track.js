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
        console.log(this.props.track);
        return(
            <div className="track">
                <h3 className='songTitle' name='songTitle'>{this.props.track.name}</h3>
                <p className='songInfo' name='songInfo'>{this.props.track.artist} | {this.props.track.album}</p>
                <img className='albumCover' src={this.props.track.images} alt={this.props.track.album}/>
                {this.renderAction()}
                <div className='line'></div>
            </div>
        )
    }
}

export default Track;
