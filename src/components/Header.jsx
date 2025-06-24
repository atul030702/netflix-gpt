import { useEffect, useState, useRef } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js";
import { dropDownImg } from "../utils/image.js";
import { netflixLogoCdn } from "../utils/image.js";
import { addUser, removeUser } from "../utils/userSlice.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";

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

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

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
            className={`w-full flex items-center justify-between relative transition-all duration-300 
                px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-4 xl:px-12 xl:py-5
                ${isScrolled ? "bg-black shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"}`
            }
        >
            <div className="flex items-center">
                <img className="w-20 h-auto sm:w-24 md:w-32 lg:w-36 xl:w-44 2xl:w-48"
                    src={netflixLogoCdn} alt="Netflix Logo" 
                    role="Image" draggable="false" loading="lazy"
                /> 
            </div>
                 

            {user  && (
                <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6">

                    <button onClick={handleGptSearchClick}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-all duration-200 cursor-pointer
                            transform hover:scale-105 active:scale-95
                            px-2 py-1 text-xs
                            sm:px-3 sm:py-1.5 sm:text-sm
                            md:px-4 md:py-2 md:text-base
                            lg:px-5 lg:py-2.5
                            xl:px-6 xl:py-3
                        "
                    >
                        GPT Search
                    </button>

                    <div onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="relative" 
                        ref={dropdownRef}
                    >
                        <img onClick={() => setShowDropdown(!showDropdown)}
                            className="rounded cursor-pointer transition-transform duration-200 hover:scale-110
                                w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10
                            " 
                            src={dropDownImg} 
                            alt="Dropdown Icon" 
                            draggable="false" 
                            loading="lazy" 
                            decoding="async"
                        />

                        {showDropdown && (
                            <div className={`absolute bg-black text-white rounded shadow-lg flex flex-col transition-all duration-300 border border-gray-700
                                top-8 right-0 p-1 min-w-32
                                sm:top-9 sm:p-2 sm:min-w-36
                                md:top-10 md:p-2 md:min-w-40
                                lg:top-11 lg:p-3 lg:min-w-44
                                xl:top-12 xl:min-w-48
                            `}>
                                <div className="border-b border-gray-600 pb-1 mb-1
                                    sm:pb-2 sm:mb-2
                                ">
                                    <h2 className="whitespace-nowrap font-semibold text-gray-200
                                        text-xs px-2 py-1
                                        sm:text-sm sm:px-2 sm:py-1.5
                                        md:text-base md:px-3 md:py-2
                                        lg:px-3 lg:py-2
                                    ">
                                        {user?.displayName}
                                    </h2>
                                </div>
                                
                                <button onClick={handleSignOut}
                                    className="text-left whitespace-nowrap hover:bg-gray-800 transition-colors duration-200 rounded cursor-pointer
                                        text-xs px-2 py-1
                                        sm:text-sm sm:px-2 sm:py-1.5
                                        md:text-base md:px-3 md:py-2
                                        lg:px-3 lg:py-2
                                    "
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