import playBtnLogo from "../assets/play-btn-logo.svg";
import infoLogo from "../assets/info-logo.svg";

const VideoTitle = ({ title, overview }) => {

    return (
        <div className="text-white font-sans px-10 w-screen aspect-video absolute flex items-start justify-center flex-col space-y-4 bg-gradient-to-r from-black/50">
            <h1 className="text-2xl font-bold drop-shadow-md">{title}</h1>
            <p className="py-2.5 text-[1rem] w-1/3 leading-relaxed drop-shadow-sm">{overview}</p>

            <div className="flex justify-start items-center gap-2.5">
                <button className="inline-flex justify-center items-center font-bold text-black bg-white rounded-sm px-3 py-1 cursor-pointer hover:bg-white/90 transition">
                    <img className="size-[25px]" src={playBtnLogo} alt="Play Button Logo" loading="lazy" decoding="async" draggable="false" />
                    Play
                </button>

                <button className="inline-flex justify-center items-center font-bold text-white bg-[#6D6D6EB3] rounded-sm gap-1.5 px-3 py-1 cursor-pointer bg-opacity-50 hover:bg-[#6D6D6EB3]/50 transition">
                    <img className="size-[22px]" src={infoLogo} alt="Info Logo" loading="lazy" decoding="async" draggable="false" />
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
