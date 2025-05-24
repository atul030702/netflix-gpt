
import { netflixLogoCdn } from "../utils/image.js";

const Header = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-44"
                    src={netflixLogoCdn} alt="Netflix Logo" 
                    role="Image" draggable="false" loading="lazy"
                />  
            </div>

        </div>
    );
};

export default Header;