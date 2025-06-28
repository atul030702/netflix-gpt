import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addUpcomingMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const json = await fetchFromTMDB("upcoming");
            dispatch(addUpcomingMovies(json?.results));
        } catch (error) {
            console.error("Error loading upcoming movies:", error.message);
        }
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);
};

export default useUpcomingMovies;