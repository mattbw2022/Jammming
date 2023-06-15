import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../utility/Spotify';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: ["Example Playlist"],
      playlistTracks: []
  };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track){
    let foundTrack = this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);

    foundTrack ? console.log("Track already in playlist") : this.setState({playlistTracks: newTrack});
  }

  removeTrack(track){
    const isPresent = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState({playlistTracks : isPresent});
  }

  updatePlaylistName(name){
    this.setState({playlistName : name})
  } 

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    const name = this.state.playlistName;
    Spotify.savePlayListName(name, trackURIs).then(() => {
      this.setState({
        playlistName : "New Playlist",
        playlistTracks : [],
      });
    })
    }

  search(term){
    Spotify.search(term)
      .then(results => {
        this.setState({searchResults: results});
      });
    console.log(term);
  }

  render(){
    return (
      <div>
        <header>
          <h1>Jammming</h1>
        </header>
        <SearchBar onSearch={this.search}/>
        <div id='songs'>
          <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    );
  }

}
Spotify.getAccessToken();

export default App;
