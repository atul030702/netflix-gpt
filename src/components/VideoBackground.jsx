import {  useSelector } from "react-redux";

import useMovieTrailer from "../hooks/useMovieTrailer.js";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
   
    useMovieTrailer(movieId);
    
    return (
        <div className="w-full h-full absolute inset-0 -z-10 overflow-hidden">
            <iframe 
                className="
                w-[150vw] h-[150vh] 
                -translate-x-[25vw] -translate-y-[25vh] 
                scale-[1.4]
                sm:w-[130vw] sm:h-[130vh] sm:-translate-x-[15vw] sm:-translate-y-[15vh] sm:scale-[1.3]
                md:w-[120vw] md:h-[120vh] md:-translate-x-[10vw] md:-translate-y-[10vh] md:scale-[1.2]
                lg:w-[110vw] lg:h-[110vh] lg:-translate-x-[5vw] lg:-translate-y-[5vh] lg:scale-[1.1]
            "
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