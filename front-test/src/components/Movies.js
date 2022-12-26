import {useEffect, useState} from "react";
import MoviesList from "./MoviesList";
import {Link} from "react-router-dom";

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
          <Movie title={item.title} img={item.medium_cover_image} year={item.year} rating={item.rating} key={item.key} id={item.id}>
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
  console.log(props.rating);

  let rat = parseInt(props.rating);
  console.log(rat);

  let result = "*";
  if (rat === 0) {
    result = "";
  }
  let result_str = result.repeat(rat);
  console.log(result_str);

  // for (let i = 0; i < rat; i++) {
  //   console.log("*".repeat(result));
  // }

  return (
    <div>
      <Link to={`/movie/detail/${props.id}`}>{props.title}</Link>
      <br/>
      <img src={props.img} alt=""/> <br/>
      {props.rating} {result_str}
      <h3>{props.year}</h3>
      <br/> <br/>
    </div>
  );
};

export default Movies;