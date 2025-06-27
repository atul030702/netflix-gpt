import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addTopRatedMovies } from "../utils/movieSlice.js";
//import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(`${URL}top_rated?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addTopRatedMovies(json?.results));
    };

    /*const getTopRatedMovies = async () => {
        try {
            const json = await fetchFromTMDB("top_rated");
            dispatch(addTopRatedMovies(json?.results));
        } catch (error) {
            console.error("Error loading top rated movies:", error.message);
        }
    };*/

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;