import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addUpcomingMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    /*const getUpcomingMovies = async () => {
        const data = await fetch(`${URL}upcoming?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addUpcomingMovies(json?.results));
    };*/

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