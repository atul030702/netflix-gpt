import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);

    return (
        <div className="bg-black text-white">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies?.nowPlayingMovies} />
            <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
        </div>
    );
};

export default SecondaryContainer;