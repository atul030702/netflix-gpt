const ShimmerCard = () => {
    return (
        <div className="shrink-0 relative overflow-hidden
            w-32 mr-2
            sm:w-36 sm:mr-2.5
            md:w-40 md:mr-3
            lg:w-44 lg:mr-3.5
            xl:w-48 xl:mr-4
            2xl:w-52 2xl:mr-4
        ">
            <div className="bg-gray-700 rounded w-full shadow-md relative
                h-48
                sm:h-54
                md:h-60
                lg:h-66
                xl:h-72
                2xl:h-78
            ">
                {/* Wave animation overlay */}
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded"></div>
            </div>
        </div>
    );
};

const ShimmerMovieList = ({ title }) => {
    return (
        <div className="text-white
            px-3 mb-3
            sm:px-4 sm:mb-4
            md:px-5 md:mb-5
            lg:px-6 lg:mb-6
            xl:px-8 xl:mb-8
        ">
            {/* Title */}
            <h1 className="font-sans font-medium text-white drop-shadow-md
                text-lg pl-2 py-2
                sm:text-xl sm:pl-3 sm:py-2.5
                md:text-2xl md:pl-4 md:py-3
                lg:text-2xl lg:pl-4 lg:py-3
                xl:text-3xl xl:pl-5 xl:py-4
            ">
                {title}
            </h1>
            
            <div className="relative">
                <div className="flex justify-start overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth
                    pb-2
                    sm:pb-3
                    md:pb-4
                    lg:pb-4
                "
                    style={{scrollbarWidth: "none", msOverflowStyle: "none", WebkitScrollbar: {display: "none"} }}
                >
                    {/* Create 8 shimmer cards */}
                    {Array.from({ length: 8 }, (_, index) => (
                        <ShimmerCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShimmerMovieList;