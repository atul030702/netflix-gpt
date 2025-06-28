import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import lang from "../utils/languageConstants.js";
import { addGptMovieResult, setGptLoading } from "../utils/gptSlice.js";
import { systemPromptGemini } from "../utils/image.js";
import { parseGeminiMovies, searchMovieTMDB } from "../utils/gptMovieUtils.js";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();
    const languageKey = useSelector(store => store.config.lang);
    const isLoading = useSelector(store => store.gpt?.isLoading);

    const handleGptSearchClick = async () => {
        const inputValue = searchText?.current?.value;
        if(!inputValue.trim()) return;

        try {
            dispatch(setGptLoading(true));

            const systemPrompt = systemPromptGemini(inputValue);

            //Make an api call to gemini ai and get movie result
            const response = await fetch("/api/gemini", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ prompt: systemPrompt })
            });

            const data = await response.json();
            if(!data.result) return;

            //clear markdown format if present in ai response
            const parsedMovies = parseGeminiMovies(data?.result);

            const promiseArray = parsedMovies?.map(movie => searchMovieTMDB(movie));
            const tmdbResults = await Promise.all(promiseArray);

            //updating the gpt slice with gpt movie recommendation after fetching it from tmdb
            dispatch(addGptMovieResult({ movieNames: parsedMovies, movieResults: tmdbResults }));

            //clear the input box
            searchText.current.value = "";
        } catch (error) {
            console.error("Error fetching GPT suggestions:", error);
        } finally {
            dispatch(setGptLoading(false));
        }
    };

    return (
        <div className="w-full absolute top-[20%] sm:top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-3 sm:px-4 md:px-6">
            <div className="bg-black bg-opacity-80 border border-gray-800 rounded-lg p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto shadow-2xl">
                <form onSubmit={(e) => e.preventDefault()}
                    className="w-full flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
                >
                    <input ref={searchText}
                        className="w-full sm:flex-1 p-2 sm:p-3 text-black font-medium text-sm sm:text-base md:text-lg border-2 border-red-600 rounded-lg bg-white outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300 placeholder:text-gray-500"
                        type="text" 
                        placeholder={lang[languageKey].gptSearchPlaceholder} 
                        disabled={isLoading}
                    />
                    <button 
                        onClick={handleGptSearchClick}
                        disabled={isLoading}
                        className="w-full sm:w-auto py-3 sm:py-4 px-6 sm:px-8 md:px-10 text-white font-semibold text-sm sm:text-base rounded-lg bg-red-600 transition-all duration-300 cursor-pointer hover:bg-red-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        { isLoading ? "Searching..." : lang[languageKey].search }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GptSearchBar;