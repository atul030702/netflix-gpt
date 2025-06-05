import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen overflow-hidden overflow-x-hidden">

            <VideoBackground movieId={id} />

            
            <div className="h-max w-1/2 px-10 absolute bottom-[50%] left-0 flex items-center z-10">
                <VideoTitle title={original_title} overview={overview}/>
            </div>
        </div>
    );
};

export default MainContainer;