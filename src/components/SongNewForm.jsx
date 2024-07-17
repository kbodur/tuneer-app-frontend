import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongNewForm() {
    const navigate = useNavigate();
    const [song, setSong] = useState({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    });

    // Add a color. Redirect to the index view.
    const addSong = () => {
        fetch(`${API}/songs`, {
            method: "POST",
            body: JSON.stringify(song),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate("/songs")
            })
            .catch(err => console.log(err))
    };

    const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong();
    };

    return (
        <div className="New-page">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    id="name"
                    value={song.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Song"
                    required
                /> <br />
                <label htmlFor="artist">Artist:</label> <br />
                <input
                    id="artist"
                    value={song.artist}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Artist"
                    required
                /> <br />
                <label htmlFor="album">Album:</label> <br />
                <input
                    id="album"
                    value={song.album}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Album"
                    required
                /> <br />
                <label htmlFor="time">Time:</label> <br />
                <input
                    id="time"
                    value={song.time}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Time"
                    required
                /> <br />
                <label htmlFor="is_favorite">Favorite:</label> <br />
                <input
                    id="is-favorite"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={song.is_favorite}
                /> <br />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <Link to={`/songs`}>
                <button>Nevermind!</button>
            </Link>
        </div>
    );
}

export default SongNewForm;
