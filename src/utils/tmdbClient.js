export async function fetchFromTMDB(endpoint) {
    try {
        const response = await fetch(`/api/tmdb?endpoint=${endpoint}`);

        if(!response.ok) throw new Error("Failed to fetch from /api/tmdb");
            
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("fetchFromTMDB error:", error.message);
        throw error;
    }
}