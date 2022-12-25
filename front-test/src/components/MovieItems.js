function MovieItems(props) {
  return (
    <li>
      <p>{props.key}</p>
      <p>{props.img}</p>
      <p>{props.title}</p>
      <p>{props.year}</p>
      <p>{props.desc}</p>
      <p>{props.genres}</p>
    </li>
  );
}

export default MovieItems;