import { posterCdnUrl } from "../utils/image";

const MovieCard = ({posterPath}) => {

    return (
        <div className="w-48 mr-4">
            <img src={`${posterCdnUrl}${posterPath}`} alt="Movie Poster" draggable="false"/>
        </div>
    );
};

export default MovieCard;