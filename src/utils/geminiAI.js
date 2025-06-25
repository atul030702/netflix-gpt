import { GoogleGenAI } from "@google/genai";

import { URL, API_Options } from "./apiOption.js";
import { systemPromptGemini } from "./image.js";

export const handleGptSearch = async (inputText) => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const ai = new GoogleGenAI({apiKey: API_KEY});
    const systemPrompt = systemPromptGemini(inputText);

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: systemPrompt,
        });

        const geminiMovies = response.text;
        console.log(geminiMovies, typeof geminiMovies);
        const moviesArray = geminiMovies.split(",");
        console.log(moviesArray);
        
    } catch (error) {
        console.error("AI Error:", error);
        throw new error;
    }
};

export const searchMovieTMDB = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`, API_Options);
    const json = await data.json();
    return json?.results;
};

