import { useRef } from "react";
import { useSelector } from "react-redux";
import { GoogleGenAI } from "@google/genai";

import lang from "../utils/languageConstants.js";
import { systemPromptGemini } from "../utils/image.js";

const GptSearchBar = () => {
    const searchText = useRef(null);
    const languageKey = useSelector(store => store.config.lang);

    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const ai = new GoogleGenAI({apiKey: API_KEY});

    const handleGptSearchClick = async () => {
        const inputValue = searchText?.current?.value;


        const systemPrompt = systemPromptGemini(inputValue);

        //Make an api call to gemini ai and get movie result
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: systemPrompt,
        });

        if(!response.text) {
            //TODO: Write error handling
        }

        const geminiMovies = response.text;
        console.log(geminiMovies, typeof geminiMovies);
        const moviesArray = geminiMovies.split(",");
        console.log(moviesArray);

        //clear the input box
        searchText.current.value = "";
    };

    return (
        <div className="w-full absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4">
            <div className="bg-black bg-opacity-80 rounded-lg p-2 max-w-4xl mx-auto">
                <form onSubmit={(e) => e.preventDefault()}
                    className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center"
                >
                    <input ref={searchText}
                        className="w-full sm:flex-1 p-2 text-black font-semibold text-base sm:text-lg border-2 border-red-600 rounded bg-white outline-none focus:border-red-700 transition-colors duration-300"
                        type="text" 
                        placeholder={lang[languageKey].gptSearchPlaceholder} 
                    />
                    <button 
                        onClick={handleGptSearchClick}
                        className="w-full sm:w-auto py-3 px-6 text-white font-semibold rounded bg-red-600 transition-all duration-300 cursor-pointer hover:bg-red-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        {lang[languageKey].search}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GptSearchBar;