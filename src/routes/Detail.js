import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const getMovie = useCallback(async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setLoading(false);
      setMovie(json.data.movie);
      setGenres(json.data.movie.genres); // TODO setGenres(movie.genres) 로는 세팅이 안됨
      console.log(json);
    }, [id]);
    useEffect(() => {
      if (id !== "" && id.length > 1) {
        getMovie();
      }
    }, [getMovie, id]); //  React Hook useEffect has missing dependencies: 'getMovie' and 'id'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
  return (<div>{loading ? <h1>디테일</h1> : 
  <div>
    <img
      src={movie.large_cover_image}
      alt={movie.large_cover_image}
    />
    <h2>{movie.title}</h2>
    <p>{movie.description_intro}</p>
    <div>
      <span>GENRES: </span>
      {genres.map((g) => (
        <span key={g}>{g}, </span>
      ))}
    </div>
  </div>}</div>);
}
export default Detail;
