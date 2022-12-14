import "./row.css";
import React, {useState, useEffect} from 'react'
import axios from '../../axios';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/"

function Row(props) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchUrl]); // runs once if []
    // console.log(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const playTrailer = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch((error) => console.log(error));
        }
    }
    return (
        <div className='row'>
            <h3>{props.title}</h3>
            <div className='row--movies-container'>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row--movie-poster ${props.isLargeRow && "row--largePoster"}`}
                        onClick={()=> playTrailer(movie)}
                        src={`${base_url}${props.isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row