import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addNowPlayingMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    
    useEffect(() => {

        const getNowPlayingMovies = async () => {
            try {
                const json = await fetchFromTMDB("now_playing");
                dispatch(addNowPlayingMovies(json?.results || []));
            } catch (error) {
                console.error("Error loading now playing movies:", error.message);
            }
        }

        if(!nowPlayingMovies) getNowPlayingMovies();

    }, [nowPlayingMovies, dispatch]);

};

export default useNowPlayingMovies;