import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addUpcomingMovies } from "../utils/movieSlice.js";
import { fetchFromTMDB } from "../utils/tmdbClient.js";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies);

    useEffect(() => {
        if(upcomingMovies) return;

        const getUpcomingMovies = async () => {
            try {
                const json = await fetchFromTMDB("upcoming");
                dispatch(addUpcomingMovies(json?.results));
            } catch (error) {
                console.error("Error loading upcoming movies:", error.message);
            }
        };

        getUpcomingMovies(); //Fetch only when redux store is null

    }, [ dispatch, upcomingMovies ]);
};

export default useUpcomingMovies;