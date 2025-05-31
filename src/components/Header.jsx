import { useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js";
import { dropDownImg } from "../utils/image.js";
import { netflixLogoCdn } from "../utils/image.js";
import { addUser, removeUser } from "../utils/userSlice.js";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, dropDownImg} = user;
                dispatch(addUser( { 
                    uid: uid, 
                    email: email, 
                    displayName: displayName, 
                    photoURL: dropDownImg 
                }));
                navigate("/browse");

            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        window.addEventListener("scroll", handleScroll);
          
        return () => {
            unsubscribe();
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    function handleScroll() {
        setIsScrolled(window.scrollY > 10);
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            //navigate("/");
        }).catch((error) => {
            console.error(error?.message);
            navigate("/error");
        });
    };

    return (

        <div 
            className={`w-full flex items-center justify-center relative transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"}`}
        >
            <div className="w-full flex pl-20">
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