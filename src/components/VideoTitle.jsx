import playBtnLogo from "../assets/play-btn-logo.svg";
import infoLogo from "../assets/info-logo.svg";

const VideoTitle = ({ title, overview }) => {

    return (
        <div className="w-full h-full text-white font-sans absolute flex items-start justify-center flex-col bg-gradient-to-r from-black/70 via-black/40 to-transparent
            px-3 py-16 space-y-2
            sm:px-6 sm:py-20 sm:space-y-3
            md:px-8 md:py-24 md:space-y-4"
        >
            <h1 className="text-lg font-bold drop-shadow-lg leading-tight
                sm:text-xl
                md:text-2xl
                lg:text-3xl
                xl:text-4xl"
            >
                {title}
            </h1>
            <p className="drop-shadow-md leading-relaxed line-clamp-4 text-xs py-1 w-full
                sm:text-sm sm:py-1.5 sm:w-4/5 sm:line-clamp-3
                md:text-base md:py-2 md:w-3/4 md:line-clamp-4
                lg:text-lg lg:py-2.5 lg:w-2/3 lg:line-clamp-none
                xl:w-1/3"
            >
                {overview}
            </p>

            <div className="flex justify-start items-center
                gap-1.5 pt-1
                sm:gap-2 sm:pt-2
                md:gap-2.5 md:pt-3
                lg:gap-3 lg:pt-4
                xl:pt-5
            ">
                <button className="inline-flex justify-center items-center font-semibold text-black bg-white rounded cursor-pointer hover:bg-white/90 transition-all duration-200
                    text-xs px-2 py-1
                    sm:text-sm sm:px-3 sm:py-1.5 sm:font-bold
                    md:text-base md:px-4 md:py-2
                    lg:px-5 lg:py-2.5
                    xl:px-6 xl:py-3"
                >
                    <img className="mr-1 size-3 sm:size-4 sm:mr-1.5 md:size-5 md:mr-2 lg:size-6 xl:size-7" 
                        src={playBtnLogo} alt="Play Button Logo" loading="lazy" decoding="async" draggable="false" 
                    />
                    Play
                </button>

                <button className="inline-flex justify-center items-center font-semibold text-white bg-gray-600/70 rounded cursor-pointer hover:bg-gray-600/50 transition-all duration-200
                    text-xs px-2 py-1 gap-1
                    sm:text-sm sm:px-3 sm:py-1.5 sm:gap-1.5 sm:font-bold
                    md:text-base md:px-4 md:py-2 md:gap-2
                    lg:px-5 lg:py-2.5
                    xl:px-6 xl:py-3
                ">
                    <img className=" size-3 sm:size-4 md:size-5 lg:size-6 xl:size-7" 
                        src={infoLogo} alt="Info Logo" loading="lazy" decoding="async" draggable="false" 
                    />
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
