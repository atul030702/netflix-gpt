import {  useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
   
    useMovieTrailer(movieId);
    
    return (
        <div className="w-full h-full absolute flex items-start justify-center inset-0 -z-10 overflow-hidden">
            <iframe 
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&loop=1&playlist=${trailerVideo?.key}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                referrerPolicy="strict-origin-when-cross-origin" 
                frameBorder="0"
                allowFullScreen
            >
            </iframe> 
        </div>
    );
};

export default VideoBackground;