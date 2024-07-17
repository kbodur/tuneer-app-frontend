import { Link } from "react-router-dom";

function Song({ song, onToggleFavorite }) {

    const handleFavoriteClick = () => {
        fetch(`${API}/songs/${song.id}`, {
            method: "PUT",
            body: JSON.stringify({ ...song, is_favorite: !song.is_favorite }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(updatedSong => {
                onToggleFavorite(updatedSong);
            })
            .catch(err => console.log(err));
    };



    return (
        <tr>
            <td> <Link to={`/songs/${song.id}`}>{song.name}</Link></td>
            <td> {song.artist}</td>
            <td>{song.album}</td>
            <td>{song.time}</td>
            <td onClick={handleFavoriteClick}>{song.is_favorite ? "⭐️" : " "}</td>

        </tr>
    );
}

export default Song;
