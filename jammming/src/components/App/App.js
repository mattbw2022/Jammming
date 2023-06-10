import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import TrackList from '../TrackList/TrackList';

function App() {
  return (
    <div>
      <header>
        <h1>Jammming</h1>
      </header>
      <SearchBar></SearchBar>
      <div id='songs'>
        <SearchResults></SearchResults>
        <TrackList></TrackList>
      </div>
    </div>
  );
}

export default App;
