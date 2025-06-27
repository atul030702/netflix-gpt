export default async function handler(req, res) {
    const { endpoint } = req.query;

    const url = `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
            }
        });

        if(!response.ok) throw new Error("TMDB request failed");

        const data = await response.json();
        res.status(200).json(data);
    }catch(error) {
        console.error("TMDB API error:", error.message);
        res.status(500).json({error: "Failed to fetch from TMDB"});
    }
}