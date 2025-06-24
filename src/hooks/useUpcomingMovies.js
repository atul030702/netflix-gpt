import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addUpcomingMovies } from "../utils/movieSlice.js";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(`${URL}upcoming?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addUpcomingMovies(json?.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [])
};

export default useUpcomingMovies;