import { posterCdnUrl } from "../utils/image";

const MovieCard = ({posterPath}) => {

    return (
        <div className="w-48 mr-4 shrink-0">
            <img 
                className="rounded-sm"
                src={`${posterCdnUrl}${posterPath}`} 
                alt="Movie Poster" 
                draggable="false"
                decoding="async"
                loading="lazy"
            />
        </div>
    );
};

export default MovieCard;