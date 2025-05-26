import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useNavigate } from "react-router";

import { dropDownImg } from "../utils/image.js";
import { netflixLogoCdn } from "../utils/image.js";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            navigate("/error");
        });
    };

    return (

        <div className="w-full flex items-center justify-center relative">
            <div className="w-full flex">
                <img className="w-44"
                    src={netflixLogoCdn} alt="Netflix Logo" 
                    role="Image" draggable="false" loading="lazy"
                /> 
            </div>
                 

            {user  && (
                <div className="w-full flex items-center justify-end">
                    <img className="w-8 h-8 rounded-sm" src={dropDownImg} alt="Dropdown Icon" draggable="false" loading="lazy" decoding="async"/>
                    <button onClick={handleSignOut}
                        className="mx-1.5 font-bold cursor-pointer"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>

    );
};

export default Header;