
import { loginPageBgImg } from "../utils/image.js";
import GptSearchBar from "./GptSearchBar.jsx";
import GptMovieSuggestions from "./GptMovieSuggestions.jsx";

const GPTSearch = () => {

    return (
        <div className="w-full min-h-screen relative overflow-hidden">
            <img className="absolute inset-0 object-cover w-full h-full -z-10"
                src={loginPageBgImg} 
                alt="Background image" 
                role="background image" 
                draggable="false" 
                loading="lazy" 
                decoding="async"
            />

            <div className="relative z-10 min-h-screen flex flex-col">
                <GptSearchBar />
                <div className="flex-1 mt-20 sm:mt-0">
                    <GptMovieSuggestions />
                </div>
            </div>
            
        </div>
    );
};

export default GPTSearch;