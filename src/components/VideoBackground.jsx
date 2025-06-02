
import { useEffect } from "react";
import { URL, API_Options } from "../utils/apiOption.js";

const VideoBackground = ({ movieId }) => {

    const getMovieVideo = async () => {
        const response = await fetch(`${URL}/${movieId}/videos`, API_Options);
        const data = await response.json();

        const filterData = data?.results.filter((video) => video?.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data?.results[0]; 
        console.log(trailer)

    };

    useEffect(() => {
        getMovieVideo();
    }, []);

    return (
        <div>Video Background</div>
    );
};

export default VideoBackground;