import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { URL, API_Options } from "../utils/apiOption.js";
import { addPopularMovies } from "../utils/movieSlice.js";


const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(`${URL}popular?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addPopularMovies(json?.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;