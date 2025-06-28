import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addTopRatedMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        try {
            const json = await fetchFromTMDB("top_rated");
            dispatch(addTopRatedMovies(json?.results));
        } catch (error) {
            console.error("Error loading top rated movies:", error.message);
        }
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;