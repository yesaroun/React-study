import {useEffect, useState} from "react";
import MovieItems from "./MovieItems";

function MovieList() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')
      .then((res) => res.json())
      .then((data) => {setMovie(data.data.movies)});
  }, []);

  return (
    <div>
      {movie.map((item) => {
        return (
          <MovieItems key={item.id} img={item.large_cover_image} title={item.title} year={item.year} desc={item.description_full} genres={item.genres}></MovieItems>
        );
      })}
    </div>
  )
}

export default MovieList();