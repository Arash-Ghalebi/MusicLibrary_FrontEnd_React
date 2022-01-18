import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SongForm from './Components/SongForm/SongForm';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [songs,setSong] = useState([])

  useEffect(()=>{
    getSongs()
  },[])

  async function getSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    console.log("Music: ", response.data);
    setSong(response.data)
  }

  async function postSongs(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    getSongs();
  }

  return (
    <div>
        <h3>Hello World</h3>
        <MusicTable songs={songs} getSongs={getSongs}/>
        <SongForm postSongs={postSongs}/>
      
    </div> 

  );
}

export default App;
