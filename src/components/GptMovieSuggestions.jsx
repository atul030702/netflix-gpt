

const GptMovieSuggestions = () => {
    return (
        <div className="w-full px-4 py-8 mt-8 sm:mt-16">
            <div className="max-w-6xl mx-auto">
                <div className="bg-black bg-opacity-70 rounded-lg p-6 text-center">
                    <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                        Movie Suggestions
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Your personalized movie recommendations will appear here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GptMovieSuggestions;