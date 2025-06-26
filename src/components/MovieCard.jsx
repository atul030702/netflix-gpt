import { posterCdnUrl } from "../utils/image";
import brokenImage from "../assets/broken_image.png";

const MovieCard = ({posterPath}) => {

    return (
        <div className="shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105
            w-32 mr-2
            sm:w-36 sm:mr-2.5
            md:w-40 md:mr-3
            lg:w-44 lg:mr-3
            xl:w-48 xl:mr-4
            2xl:w-52 2xl:mr-4
        ">
            <img 
                className="rounded w-full object-cover shadow-md hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300
                    h-48 sm:h-54 md:h-60 lg:h-66 xl:h-72 2xl:h-78
                "
                src={posterPath ? `${posterCdnUrl}${posterPath}` : brokenImage} 
                alt="Movie Poster" 
                draggable="false"
                decoding="async"
                loading="lazy"
            />
        </div>
    );
};

export default MovieCard;