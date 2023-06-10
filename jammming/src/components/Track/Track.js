
function Track(){
    return(
        <>
            <h3 className='songTitle' name='title'>Song</h3>
            <h4 className='songInfo' name='artist'>Artist</h4>
            <h4 className='songInfo' name='album'>Album</h4>
            <img className="songInfo" src='' name="album-cover" alt='Album Cover' />
            <h4 className='songInfo' name='run-time'>Run Time</h4>
            <button id="add-button">+</button>
        </>
    );
}

export default Track;