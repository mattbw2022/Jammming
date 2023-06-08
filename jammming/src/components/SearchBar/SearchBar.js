import './SearchBar.css';

function SearchBar(){
    return(
        <div>
            <form id='SearchBar'>
                <input placeholder='Enter a song, title or album'></input>
                <button>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;
