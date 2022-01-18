import axios from "axios";

const MusicTable = (props) => {  

    async function addSong(){
        
        let songToAdd = {
            "title": "What's Going On",
            "artist": "Marvin Gaye",
            "album": "What's Going On",
            "genre": "Soul",
            "release_date": "1971-01-20"
        }
        await axios.post('http://127.0.0.1:8000/music/',songToAdd)
        props.getSongs()
    }


    return (
      <div>
        <h5>Music Table test </h5>
        <table>
          <tbody>
            <tr>
              <th>Song Title</th> <th>Artist</th> <th>Album</th> <th>Genre</th> <th>Release Date</th> 
            </tr>
            {
              props.songs.map((element)=><tr><td>{element.title}</td><td>{element.artist}</td><td>{element.album}</td><td>{element.genre}</td><td>{element.release_date}</td></tr>)
            }
          </tbody>
        </table>
        
      </div>
    );
  }

  export default MusicTable;