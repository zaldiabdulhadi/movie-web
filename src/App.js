import { useEffect, useState } from 'react';
import MovieBox from './MovieBox';
import './App.css';

function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=116b86f10dbd93416fcea53981105212";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      async function fetchMovie() {
        const request = await fetch(API_URL);
        const response = await request.json()
        setMovies(response.results);
      }
      fetchMovie();
  });

  return (
    <div className="App">
      {movies.map((movieReq) => <MovieBox/> )}
    </div>
  );
}

export default App;
