import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTopRatedMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    useEffect(() => {
        
        const getTopRatedMovies = async () => {
            try {
                const json = await fetchFromTMDB("top_rated");
                dispatch(addTopRatedMovies(json?.results));
            } catch (error) {
                console.error("Error loading top rated movies:", error.message);
            }
        };

        if(!topRatedMovies) getTopRatedMovies();

    }, [topRatedMovies, dispatch]);
};

export default useTopRatedMovies;