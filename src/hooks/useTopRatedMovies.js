import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addTopRatedMovies } from "../utils/movieSlice.js";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(`${URL}top_rated?language=en-US&page=1`, API_Options);
        const json = await data.json();

        dispatch(addTopRatedMovies(json?.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);
};

export default useTopRatedMovies;