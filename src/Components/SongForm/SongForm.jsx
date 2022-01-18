import axios from "axios";
import React, {useState} from 'react';

const SongForm = (props) => {  
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release_date, setReleaseDate] = useState("");

    function handleSubmit(event){
        event.preventDefault()
        let songToAdd = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date
        }
        props.postSongs(songToAdd);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(event)=>setTitle(event.target.value)} type='text' placeholder="Enter song name"></input>
            <input value={artist} onChange={(event)=>setArtist(event.target.value)} type='text' placeholder="Enter artist name"></input>
            <input value={album} onChange={(event)=>setAlbum(event.target.value)} type='text' placeholder="Enter album name"></input>
            <input value={genre} onChange={(event)=>setGenre(event.target.value)} type='text' placeholder="Enter song genre"></input>
            <input value={release_date} onChange={(event)=>setReleaseDate(event.target.value)} type='date'></input>
            <button type='submit'>Submit</button>
        </form>
    )
    
}

export default SongForm;
