import { useEffect } from "react";
import { useDispatch } from "react-redux";

//import { URL, API_Options } from "../utils/apiOption.js";
import { addNowPlayingMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        /*const getNowPlayingMovies = async () => {
            const data = await fetch(`${URL}now_playing?page=1`, API_Options);
            const json = await data?.json();
            
            dispatch(addNowPlayingMovies(json?.results));
        };*/

        const getNowPlayingMovies = async () => {
            try {
                const json = await fetchFromTMDB("now_playing");
                dispatch(addNowPlayingMovies(json?.results || []));
            } catch (error) {
                console.error("Error loading now playing movies:", error.message);
            }
        }

        getNowPlayingMovies();
    }, [dispatch]);

};

export default useNowPlayingMovies;