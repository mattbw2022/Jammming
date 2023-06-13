import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
      {
        name: 'Example name1',
        artist: 'example artist1',
        album: 'example album1',
        id: '1',
      },
      {
        name: 'Example name2',
        artist: 'example artist2',
        album: 'example album2',
        id: '2',
      },
      {
        name: 'Example name3',
        artist: 'example artist3',
        album: 'example album3',
        id: '3',
      }
    ],
    playlistName: ["Example Playlist"],
    playlistTracks: [{
      name: 'Example playlist name4',
      artist: 'example playlist artist4',
      album: 'example playlist album4',
      id: '4',
    },
    {
      name: 'Example playlist name5',
      artist: 'example playlist artist5',
      album: 'example playlist album5',
      id: '5',
    },
    {
      name: 'Example playlist name6',
      artist: 'example playlist artist6',
      album: 'example playlist album6',
      id: '6',
    }]
  };
    this.addTrack = this.addTrack.bind(this);
    this.addTrack = this.removeTrack.bind(this);
  }

  addTrack(track){
    const foundTrack = this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id);
    const newTrack = this.state.playlistTracks.concat(track);

    foundTrack ? console.log("Track already in playlist") : this.setState({playlistTracks: newTrack});
  }

  removeTrack(track){
    const isPresent = this.state.playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState({playlistTracks : isPresent});
  }

  render(){
    return (
      <div>
        <header>
          <h1>Jammming</h1>
        </header>
        <SearchBar/>
        <div id='songs'>
          <SearchResults 
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
          />
          <div className='divider'></div>
          <Playlist 
            playlistName={this.state.playlistName} 
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
          />
        </div>
      </div>
    );
  }

}

export default App;
