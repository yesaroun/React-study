import {useEffect, useState} from "react";
import MoviesList from "./MoviesList";

const Movies = () => {
  const URL = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.movies);
        setMovies(data.data.movies);
        setLoading(false);
      });
    // .then((data) => {setMovie(data.data.movies)});
  }, []);

  return (
    <div>
      {loading ? <h1>영화 정보를 받아오는 중입니다.</h1> : null};
      {movies.map((item) => {
        return (
          <Movie title={item.title} img={item.medium_cover_image} year={item.year}>
          </Movie>
        )
      })}
      {/*<Movie></Movie>*/}
    </div>
    // <div>
    //   {movie.map((item) => {
    //     return (
    //       // <MoviesList key={item.id} img={item.large_cover_image} title={item.title} year={item.year} desc={item.description_full} genres={item.genres}></MoviesList>
    //
    //     );
    //   })}
    // </div>
  );
};

const Movie = (props) => {
  // return <title>"영화 제목"</title>;
  return (
    <div>
      {props.title}
    </div>
  );
};

export default Movies;