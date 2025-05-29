import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "../utils/firebase.js";
import { dropDownImg } from "../utils/image.js";
import { netflixLogoCdn } from "../utils/image.js";
import { addUser, removeUser } from "../utils/userSlice.js";

const Header = () => {
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
          
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            //navigate("/");
        }).catch((error) => {
            console.error(error?.message);
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