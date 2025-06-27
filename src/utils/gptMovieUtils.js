import { searchMoviesTmdbUrl, API_Options } from "./apiOption.js";

const cleanGeminiJson = (aiText) => {
    return aiText.trim()
        ?.replace(/^```json/, "")
        ?.replace(/^```/, "")
        ?.replace(/```$/, "")
        ?.trim()
    ;
};

export const parseGeminiMovies = (responseText) => {
    try {
        const cleaned = cleanGeminiJson(responseText);
        return JSON.parse(cleaned);
    } catch (error) {
        console.error("Failed to parse Gemini response:", error);
        return [];
    }
};

export const searchMovieTMDB = async ({ name, year }) => {
    const query = encodeURIComponent(name);
    
    try {
        const response = await fetch(
            searchMoviesTmdbUrl(query, year), 
            API_Options
        );
        const data = await response.json();
        return data?.results;
    } catch (error) {
        console.error("TMDB API error:", error);
        return [];
    }
}; 

/*export const searchMovieTMDB = async ({ name, year }) => {
    try {
        const query = new URLSearchParams({ name, ...(year && { year }) }).toString();

        const response = await fetch(`/api/search?${query}`);
        const data = await response.json();
        return data?.results;
    } catch (error) {
        console.error("API error from backend /api/search:", error);
        return [];
    }
}; */

