import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-full overflow-hidden">
            <VideoBackground movieId={id} />
            <div className="h-max absolute inset-0 z-10 bg-gradient-to-b from-black/20 to-black/80">
                <VideoTitle title={original_title} overview={overview}/>
            </div>
        </div>
    );
};

export default MainContainer;