import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SongDetails() {
    const [song, setSong] = useState({ name: "" });

    let navigate = useNavigate();
    let { id } = useParams();

    // On page load, load color details
    useEffect(() => {
        fetch(`${API}/songs/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setSong(res)
            })
            .catch(err => console.log(err))
    }, [])
    // Be able to delete a color. Return to index view.
    const handleDelete = () => {
        fetch(`${API}/songs/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(res => {
                navigate("/songs")
            })
            .catch(err => console.log(err))
    };

    return (
        <article className="show-page">
            <p>Name: {song.name}</p>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Time:{song.time}</p>
            <p>Favorite: {song.is_favorite ? <span>⭐️</span> : null}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>


            <div className="showNavigation">
                <div>

                    <Link to={`/songs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>

                    <Link to={`/songs/${id}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>

                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    );
}

export default SongDetails;
