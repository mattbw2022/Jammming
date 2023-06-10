import './TrackList.css';

function TrackList(){
    return (
        <div className='track-list-container'>
            <input className='track-list-title' placeholder='New Playlist'></input>
            <div className='button-container'>
                <button className='track-list-button'>Submit To Spotify</button>
            </div>
            <div className='track-list'>
                <h3 className='track-list-item'>1.</h3>
                <h3 className='track-list-item'>Song</h3>
                <h3 className='track-list-item'>Artist</h3>
                <h3 className='track-list-item'>Run Time</h3>
                <button className='delete-button'>-</button>
            </div>
            <div className='button-container'>
                <button className='track-list-button'>Submit To Spotify</button>
            </div>
        </div>
    );
}

export default TrackList;