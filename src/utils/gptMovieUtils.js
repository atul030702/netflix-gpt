
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
    try {
        const query = `name=${encodeURIComponent(name)}${year ? `&year=${year}` : ""}`;

        const response = await fetch(`/api/search?${query}`);
        const data = await response.json();
        return data?.results || [];
    } catch (error) {
        console.error("API error from backend /api/search:", error);
        return [];
    }
}; 

