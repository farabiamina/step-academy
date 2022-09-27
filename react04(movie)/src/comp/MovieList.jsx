import React from 'react';
// import movies from "../movies.json";
import {useState, useEffect} from "react";
import MovieItem from "./MovieItem";

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1")
            .then(res => res.json())
            .then(data => {
                setMovies(data.results);
                setLoaded(true);
                // console.log(data.results);
            })
    }, []);
    return (
            <div>
                {
                    !loaded ? <h3>Loading</h3> :
                        <div>
                            <h1>Popular films</h1>
                            <div className="movie-list">
                                {
                                    movies.map((movie) =>
                                        <MovieItem key={movie.id} movie={movie} />
                                    )
                                }
                            </div>
                        </div>
                }
            </div>
    );
};

export default MovieList;