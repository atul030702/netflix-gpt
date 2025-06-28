export default async function handler(req, res) {
    const { name, year } = req.query;

    const encodedName = encodeURIComponent(name);
    const yearParam = year ? `&year=${year}` : "";

    const url = `https://api.themoviedb.org/3/search/movie?query=${encodedName}&include_adult=false&language=en-US&page=1${yearParam}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
            }
        });

        if(!response.ok) throw new Error("TMDB request failed");

        const data = await response.json();
        res.status(200).json({ results: data.results || [] });
        
    } catch (error) {
        console.error("TMDB search API error", error);
        res.status(500).json({ error: "Failed to fetch movie data." });
    }
}