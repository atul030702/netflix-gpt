import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { URL, API_Options } from "../utils/apiOption.js";
import { addPopularMovies } from "../utils/movieSlice.js";
//import { fetchFromTMDB } from "../utils/tmdbClient.js";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(`${URL}popular?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addPopularMovies(json?.results));
    };

    /*const getPopularMovies = async () => {
        try {
            const json = await fetchFromTMDB("popular");
            dispatch(addPopularMovies(json?.results || []));
        } catch (error) {
            console.error("Error loading popular movies", error.message);
        } 
    };*/

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;