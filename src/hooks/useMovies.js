import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addNowPlayingMovies } from "../utils/movieSlice.js";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(`${URL}now_playing?page=1`, API_Options);
        const json = await data?.json();
        
        dispatch(addNowPlayingMovies(json?.results));
    };
    
    useEffect(() => {
        getNowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;