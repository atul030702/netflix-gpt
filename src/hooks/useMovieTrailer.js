import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URL, API_Options } from "../utils/apiOption.js";
import { addTrailerVideo } from "../utils/movieSlice.js";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    
    const getMovieVideo = async () => {
        try {
            const response = await fetch(`${URL}/${movieId}/videos`, API_Options);
            const data = await response.json();
        
            const filterData = data?.results.filter((video) => video?.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : data?.results[0]; 
            
            dispatch(addTrailerVideo(trailer));
        } catch (error) {
            console.error("Error fetching movie trailer:", error);
        }
    };
    
    useEffect(() => {

        if(movieId) {
            getMovieVideo();
        }

    }, [ movieId ]);
};

export default useMovieTrailer;