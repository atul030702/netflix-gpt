import { useRef, useState, useEffect } from "react";

import MovieCard from "./MovieCard.jsx";
import leftScrollIcon from "../assets/arrow_back.svg";
import rightScrollIcon from "../assets/arrow_forward.svg";

const MovieList = ({title, movies}) => {
    const scrollRef = useRef();
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScrollButtons = () => {
        const element = scrollRef.current;
        if(!element) return;

        setShowLeft(element.scrollLeft > 0);
        setShowRight(element.scrollLeft + element.clientWidth < element.scrollWidth - 1);
    };

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    useEffect(() => {
        const element = scrollRef.current;
        if(!element) return;

        const animationFrame = requestAnimationFrame(() => {
            checkScrollButtons();
        });

        element.addEventListener("scroll", checkScrollButtons);

        return () => {
            cancelAnimationFrame(animationFrame);
            element.removeEventListener("scroll", checkScrollButtons);
        }
    }, [movies]);
    
    return (
        <div className="px-6 mb-5 text-white">
            <h1 className="text-2xl font-sans font-medium pl-4 py-2.5">{title}</h1>
            
            <div className="relative group">

                {showLeft && (
                    <button onClick={scrollLeft}
                        className="p-2 absolute left-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 rounded-full group-hover:black cursor-pointer"
                    >
                        <img className="ml-1.5" src={leftScrollIcon} alt="left scroll icon" draggable="false" loading="lazy" decoding="async"/>
                    </button>
                )}
                
                <div ref={scrollRef} 
                    className="flex justify-start overflow-x-auto whitespace-nowrap no-scrollbar"
                >
                    {movies?.map(movie => 
                        <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
                    )}
                </div>

                {showRight && (
                    <button onClick={scrollRight}
                        className="p-2 absolute right-1 top-1/2 -translate-y-1/2 z-20 bg-black/60 rounded-full group-hover:black cursor-pointer"
                    >
                        <img className="ml-1.5" src={rightScrollIcon} alt="Right scroll icon" draggable="false" loading="lazy" decoding="async"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default MovieList;