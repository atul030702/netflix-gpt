import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);

    return (
        movies.nowPlayingMovies && 
        (<div className="bg-[#141414] w-full">
            <div className="text-white font-mono relative z-20
                -mt-20 pt-8
                sm:-mt-24 sm:pt-10
                md:-mt-28 md:pt-12
                lg:-mt-32 lg:pt-16
                xl:-mt-40 xl:pt-20
                2xl:-mt-48 2xl:pt-24
            ">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
                <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
                <MovieList title={"Popular"} movies={movies?.popularMovies} />
                <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
            </div>
        </div>)
    );
};

export default SecondaryContainer;