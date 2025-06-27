import { useSelector } from "react-redux";

import MovieList from "./MovieList.jsx";
import lang from "../utils/languageConstants.js";
import ShimmerMovieList from "./ShimmerMovieList.jsx";

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector(store => store.gpt);
    const languageKey = useSelector(store => store.config.lang);
    const isLoading = useSelector(store => store.gpt?.isLoading);

    if(!movieNames && !movieResults && !isLoading) return null;

    return (
        <div className="w-full absolute px-4 py-8 top-[25%] sm:top-[15%] md:top-[25%] z-10">
            <div className="bg-black/75 rounded-lg px-1 py-3 text-center text-white">
                {isLoading || !movieResults ? (
                    <ShimmerMovieList title={lang[languageKey].suggestion || "AI Movie Suggestions"} />
                ) : (
                    <MovieList title={lang[languageKey].suggestion} movies={movieResults.flat()}/>
                )}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;