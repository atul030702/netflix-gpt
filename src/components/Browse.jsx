
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useMovies.js";


const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <div className="w-full flex items-center justify-center px-5">
                <Header/>
                
                
            </div>

            Browse
        </div>
    );
};

export default Browse;