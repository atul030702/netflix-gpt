import { useSelector } from "react-redux";

import MovieList from "./MovieList.jsx";
import lang from "../utils/languageConstants.js";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    const languageKey = useSelector(store => store.config?.lang);

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
                <MovieList title={lang[languageKey]?.nowPlaying} movies={movies?.nowPlayingMovies} />
                <MovieList title={lang[languageKey]?.topRated} movies={movies?.topRatedMovies} />
                <MovieList title={lang[languageKey]?.popular} movies={movies?.popularMovies} />
                <MovieList title={lang[languageKey]?.upcoming} movies={movies?.upcomingMovies} />
            </div>
        </div>)
    );
};

export default SecondaryContainer;