
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse = () => {

    useNowPlayingMovies();

    return (
        <div className="w-full flex flex-col">
            <div className="w-full absolute">
                <Header />
            </div>

            <MainContainer />
            <SecondaryContainer />

        </div>
    );
};

export default Browse;