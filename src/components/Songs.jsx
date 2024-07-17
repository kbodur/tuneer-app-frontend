import { useState, useEffect } from "react";
import Song from "./Song";

const API = import.meta.env.VITE_BASE_URL;
console.log(API)
function Songs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${API}/songs`)
            .then((response) => {
                return response.json();
            })
            .then((responseJSON) => {
                setSongs(responseJSON);
            })
            .catch((error) => console.error(error));
    }, []);

    const handleToggleFavorite = (updatedSong) => {
        setSongs(prevSongs =>
            prevSongs.map(song =>
                song.id === updatedSong.id ? updatedSong : song
            )
        );
    };

    return (
        <div className="Colors">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Artist</th>
                            <th>Album </th>
                            <th>Time</th>
                            <th>Favorite</th>

                        </tr>
                    </thead>
                    <tbody>
                        {songs.map((song) => {
                            return <Song key={song.id} song={song} onToggleFavorite={handleToggleFavorite} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default Songs;
