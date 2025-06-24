import { useEffect, useState, useRef } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js";
import { dropDownImg } from "../utils/image.js";
import { netflixLogoCdn } from "../utils/image.js";
import { addUser, removeUser } from "../utils/userSlice.js";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

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
        signOut(auth).catch((error) => {
            console.error(error?.message);
            navigate("/error");
        });
    };

    const handleMouseEnter = () => {
        clearTimeout(dropdownRef.current);
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        dropdownRef.current = setTimeout(() => setShowDropdown(false), 300);
    };

    return (

        <div 
            className={`w-full flex items-center justify-center relative transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"}`}
        >
            <div className="w-full flex pl-[7.5%]">
                <img className="w-44"
                    src={netflixLogoCdn} alt="Netflix Logo" 
                    role="Image" draggable="false" loading="lazy"
                /> 
            </div>
                 

            {user  && (
                <div className="w-full flex items-center justify-end">
                    <div onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="relative" 
                        ref={dropdownRef}
                    >
                        <img onClick={() => setShowDropdown(!showDropdown)}
                            className="w-8 h-8 mr-15 rounded-sm cursor-pointer" 
                            src={dropDownImg} 
                            alt="Dropdown Icon" 
                            draggable="false" 
                            loading="lazy" 
                            decoding="async"
                        />

                        {showDropdown && (
                            <div className={`absolute top-10 right-3 bg-black text-white p-2 rounded-sm font-bold shadow-md flex flex-col transition-all duration-300`}>
                                <h2 className="whitespace-nowrap p-2">{user?.displayName}</h2>
                                <button onClick={handleSignOut}
                                    className="border-t-2 border-t-white p-2 whitespace-nowrap hover:underline cursor-pointer"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>

    );
};

export default Header;