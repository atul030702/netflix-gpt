import { useSelector } from "react-redux";

import MovieList from "./MovieList.jsx";

const GptMovieSuggestions = () => {
    const { movieNames, movieResults } = useSelector(store => store.gpt);
    if(!movieNames || !movieResults) return "";
    console.log(movieNames);

    return (
        <div className="w-full absolute px-4 py-8 top-[25%] sm:top-[15%] md:top-[25%] z-10">
            <div className="bg-black/75 rounded-lg p-6 text-center text-white">
                {movieNames.map((movieObj, index) => (
                    <div key={index}
                        className="w-full flex flex-row justify-start items-center overflow-x-auto"
                    >
                        <MovieList title={movieObj?.name} movies={movieResults[index]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestions;