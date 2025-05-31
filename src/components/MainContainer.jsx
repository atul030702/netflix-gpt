import { useSelector } from "react-redux";

import VideoBackground from "./VideoBackground.jsx";
import VideoTitle from "./VideoTitle.jsx";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);

    const { original_title, overview } = mainMovie;

    return (
        <div>
            <VideoBackground />
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    );
};

export default MainContainer;