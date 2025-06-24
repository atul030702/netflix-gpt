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
        //scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        const scrollDistance = window.innerWidth < 640 ? 200 : 
                              window.innerWidth < 768 ? 250 : 
                              window.innerWidth < 1024 ? 300 : 350;
        scrollRef.current.scrollBy({ left: -scrollDistance, behavior: "smooth" });
    };

    const scrollRight = () => {
        //scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        const scrollDistance = window.innerWidth < 640 ? 200 : 
                              window.innerWidth < 768 ? 250 : 
                              window.innerWidth < 1024 ? 300 : 350;
        scrollRef.current.scrollBy({ left: scrollDistance, behavior: "smooth" });
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
        <div className="text-white
            px-3 mb-3
            sm:px-4 sm:mb-4
            md:px-5 md:mb-5
            lg:px-6 lg:mb-6
            xl:px-8 xl:mb-8
        ">
            <h1 className="font-sans font-medium text-white drop-shadow-md
                text-lg pl-2 py-2
                sm:text-xl sm:pl-3 sm:py-2.5
                md:text-2xl md:pl-4 md:py-3
                lg:text-2xl lg:pl-4 lg:py-3
                xl:text-3xl xl:pl-5 xl:py-4
            ">
                {title}
            </h1>
            
            <div className="relative group">

                {showLeft && (
                    <button onClick={scrollLeft} aria-label="Scroll left"
                        className="absolute z-20 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer
                            p-1.5 left-0.5 top-1/2 -translate-y-1/2
                            sm:p-2 sm:left-1
                            md:p-2.5 md:left-1
                            lg:p-3 lg:left-2
                            xl:p-3 xl:left-2
                    ">
                        <img className="
                                w-3 h-3 ml-0.5
                                sm:w-4 sm:h-4 sm:ml-1
                                md:w-5 md:h-5 md:ml-1.5
                                lg:w-6 lg:h-6 lg:ml-1.5
                                xl:w-6 xl:h-6 xl:ml-2
                            " 
                            src={leftScrollIcon} alt="left scroll icon" draggable="false" loading="lazy" decoding="async"/>
                    </button>
                )}
                
                <div ref={scrollRef} 
                    className="flex justify-start overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth
                        pb-2
                        sm:pb-3
                        md:pb-4
                        lg:pb-4
                    "
                    style={{scrollbarWidth: "none", msOverflowStyle: "none", WebkitScrollbar: {display: "none"} }}
                >
                    {movies?.map(movie => 
                        <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
                    )}
                </div>

                {showRight && (
                    <button onClick={scrollRight} aria-label="Scroll right"
                        className="absolute z-20 bg-black/70 hover:bg-black/90 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer
                            p-1.5 right-0.5 top-1/2 -translate-y-1/2
                            sm:p-2 sm:right-1
                            md:p-2.5 md:right-1
                            lg:p-3 lg:right-2
                            xl:p-3 xl:right-2
                        "
                    >
                        <img className="
                                w-3 h-3 ml-0.5
                                sm:w-4 sm:h-4 sm:ml-1
                                md:w-5 md:h-5 md:ml-1.5
                                lg:w-6 lg:h-6 lg:ml-1.5
                                xl:w-6 xl:h-6 xl:ml-2
                            "
                            src={rightScrollIcon} alt="Right scroll icon" draggable="false" loading="lazy" decoding="async"/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default MovieList;