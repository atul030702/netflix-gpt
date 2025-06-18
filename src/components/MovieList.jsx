import { useRef } from "react";

import MovieCard from "./MovieCard.jsx";
import leftScrollIcon from "../assets/arrow_back.svg";
import rightScrollIcon from "../assets/arrow_forward.svg";

const MovieList = ({title, movies}) => {
    const scrollRef = useRef();

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };
    
    return (
        <div className="px-6">
            <h1 className="text-2xl font-sans font-medium py-2.5">{title}</h1>
            
            <div className="relative flex overflow-x-scroll">

                <button onClick={scrollLeft}
                    className="p-2 absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 rounded-full group-hover:black cursor-pointer"
                >
                    <img className="ml-1.5" src={leftScrollIcon} alt="left scroll icon" draggable="false" loading="lazy" decoding="async"/>
                </button>
                
                <div ref={scrollRef} 
                    className="flex justify-start overflow-x-scroll whitespace-nowrap no-scrollbar scroll-smooth"
                >
                    {movies?.map(movie => 
                        <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
                    )}
                </div>

                <button onClick={scrollRight}
                    className="p-2 absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 rounded-full group-hover:black cursor-pointer"
                >
                    <img className="ml-1.5" src={rightScrollIcon} alt="Right scroll icon" draggable="false" loading="lazy" decoding="async"/>
                </button>
            </div>
        </div>
    );
};

export default MovieList;