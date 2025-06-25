import { useSelector } from "react-redux";

import lang from "../utils/languageConstants.js";

const GptSearchBar = () => {
    const languageKey = useSelector(store => store.config.lang);

    return (
        <div className="w-full absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4">
            <div className="bg-black bg-opacity-80 rounded-lg p-2 max-w-4xl mx-auto">
                <form className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <input 
                        className="w-full sm:flex-1 p-2 text-black font-semibold text-base sm:text-lg border-2 border-red-600 rounded bg-white outline-none focus:border-red-700 transition-colors duration-300"
                        type="text" 
                        placeholder={lang[languageKey].gptSearchPlaceholder} 
                    />
                    <button 
                        type="submit"
                        className="w-full sm:w-auto py-3 px-6 text-white font-semibold rounded bg-red-600 transition-all duration-300 cursor-pointer hover:bg-red-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        {lang[languageKey].search}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GptSearchBar;