
let accessToken = '';
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectURI = "https://mattjammming.netlify.app/";
const Spotify = {

    getAccessToken(){
        if (accessToken){
            return accessToken;
        }
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (urlAccessToken && urlExpiresIn){
            accessToken = urlAccessToken[1];
            const expires_in = Number(urlExpiresIn[1]);
            window.setTimeout(() => (accessToken = ''), expires_in * 1000);
            window.history.pushState('Access Token', null, '/');
        }

        else {
            const redirect = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
            window.location = redirect;
        }
    },   

    search(term){
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {headers: {Authorization: `Bearer ${accessToken}`},
        })
        .then(response => {
            return response.json();
        })
        .then((jsonResponse) => {
            if (!jsonResponse.tracks){
                return [];
            }
            return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
            images: track.album.images[0].url,
            }))
        })

    },

     savePlayListName(name, trackURIs){
        if (!name || !trackURIs){
            return;
        }
        let accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userID = '';
        return fetch("https://api.spotify.com/v1/me", {headers: headers,})
        .then((response) => response.json())
        .then((jsonResponse) => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: "POST",
                body: JSON.stringify({name : name}),
            }).then((response) => response.json())
            .then(jsonResponse => {
                const playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({uris : trackURIs}),
                })

            })
        })
    }   
}

export default Spotify;
