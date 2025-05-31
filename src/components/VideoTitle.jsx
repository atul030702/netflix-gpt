import playBtnLogo from "../assets/play-btn-logo.svg";
import infoLogo from "../assets/info-logo.svg";

const VideoTitle = ({ title, overview }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{overview}</p>
            <div className="flex justify-start items-center gap-2.5">
                <button className="inline-flex justify-center items-center font-bold">
                    <img src={playBtnLogo} alt="Play Button Logo" loading="lazy" decoding="async" draggable="false" />
                    Play
                </button>

                <button className="inline-flex justify-center items-center font-bold">
                    <img src={infoLogo} alt="Info Logo" loading="lazy" decoding="async" draggable="false" />
                    More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle;
