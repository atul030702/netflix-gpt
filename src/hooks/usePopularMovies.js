import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { addPopularMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    useEffect(() => {
        
        const getPopularMovies = async () => {
            try {
                const json = await fetchFromTMDB("popular");
                dispatch(addPopularMovies(json?.results || []));
            } catch (error) {
                console.error("Error loading popular movies", error.message);
            } 
        };

        if(!popularMovies) getPopularMovies();

    }, [popularMovies, dispatch]);
}

export default usePopularMovies;