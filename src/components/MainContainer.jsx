import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="relative w-full h-screen flex items-start justify-start overflow-hidden overflow-x-hidden
            "
        >

            <VideoBackground movieId={id} />

            <VideoTitle title={original_title} overview={overview}/>

        </div>
    );
};

export default MainContainer;