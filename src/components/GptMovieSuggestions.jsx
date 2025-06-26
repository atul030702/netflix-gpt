import { useSelector } from "react-redux";

import MovieList from "./MovieList.jsx";
import lang from "../utils/languageConstants.js";

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector(store => store.gpt);
    const languageKey = useSelector(store => store.config.lang);
    if(!movieNames || !movieResults) return null;

    return (
        <div className="w-full absolute px-4 py-8 top-[25%] sm:top-[15%] md:top-[25%] z-10">
            <div className="bg-black/75 rounded-lg p-6 text-center text-white">

                <MovieList title={lang[languageKey].suggestion} movies={movieResults.flat()}/>

            </div>
        </div>
    );
};

export default GptMovieSuggestions;