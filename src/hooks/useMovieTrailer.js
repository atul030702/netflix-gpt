import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTrailerVideo } from "../utils/movieSlice.js";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo)

    useEffect(() => {
        if(!movieId) return;

        const getMovieVideo = async () => {
            try {
                const response = await fetch(`/api/trailer?movieId=${movieId}`);
                const data = await response.json();

                const filterData = data?.results?.filter((video) => video?.type === "Trailer");
                const trailer = filterData.length ? filterData[0] : data?.results[0];

                dispatch(addTrailerVideo(trailer));
            } catch (error) {
                console.error("Error fetching movie trailer:", error);
            }
        };

        !trailerVideo && getMovieVideo(); //fetch trailer video only when it is null

    }, [movieId, dispatch, trailerVideo]);
};

export default useMovieTrailer;