import React, { useState, useEffect } from 'react';
import './App.css';
import DataOutput from './components/DataOutput';
import Search from './components/Search';


const track = {
  "artists": [
      {
          "external_urls": {
              "spotify": "https://open.spotify.com/artist/6sFIWsNpZYqfjUpaCgueju"
          },
          "href": "https://api.spotify.com/v1/artists/6sFIWsNpZYqfjUpaCgueju",
          "id": "6sFIWsNpZYqfjUpaCgueju",
          "name": "Carly Rae Jepsen",
          "type": "artist",
          "uri": "spotify:artist:6sFIWsNpZYqfjUpaCgueju"
      }
  ],
  "duration_ms": 207959,
  "name": "Cut To The Feeling",
  "popularity": 63,
}

const audioFeatures = {
  "danceability": 0.735,
  "energy": 0.578,
  "key": 5,
  "loudness": -11.84,
  "mode": 0,
  "speechiness": 0.0461,
  "acousticness": 0.514,
  "instrumentalness": 0.0902,
  "liveness": 0.159,
  "valence": 0.624,
  "tempo": 98.002,
  "type": "audio_features",
  "id": "06AKEBrKUckW0KREUWRnvT",
  "uri": "spotify:track:06AKEBrKUckW0KREUWRnvT",
  "track_href": "https://api.spotify.com/v1/tracks/06AKEBrKUckW0KREUWRnvT",
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/06AKEBrKUckW0KREUWRnvT",
  "duration_ms": 255349,
  "time_signature": 4
}

function App() {

  const [status, setStatus] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch('/search?query=blabla');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  useEffect(() => {
   /* callBackendAPI()
      .then(res => setStatus({ data: res.express }))
      .catch(err => console.log(err)).then(console.log(status));*/
  });
  

  return (
    <div className="App">
        <h1>Get the track analysis data from any track on Spotify</h1>
        <Search />
      <DataOutput name={track.name} duration={track.duration_ms} popularity={track.popularity} artistName={track.artists[0].name} audioFeatures={audioFeatures}/>
    </div>
  );
}

export default App;
