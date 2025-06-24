
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div className="w-full flex flex-col relative overflow-x-hidden max-w-screen">
            <div className="w-full text-white fixed top-0 left-0 z-50">
                <Header />
            </div>
            
            <MainContainer />
            <SecondaryContainer />

        </div>
    );
};

export default Browse;