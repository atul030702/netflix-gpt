import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header.jsx";
import { loginPageBgImg } from "../utils/image.js";
import { checkValidData } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";
import lang from "../utils/languageConstants.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const languageKey = useSelector(store => store.config?.lang);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const confirmPassword = useRef(null);

    const handleButtonClick = () => {
        //validate the form data        
        const message = checkValidData(
            email?.current?.value, 
            password?.current?.value, 
            !isSignInForm ? name?.current?.value : null,
            !isSignInForm ? confirmPassword?.current?.value : null
        );
        setErrorMessage(message);
        if(message) return;

        //Sign in/Sign up logic
        if(!isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(
                auth, 
                email?.current?.value, 
                password?.current?.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name?.current?.value, 
                    photoURL: "https://example.com/jane-q-user/profile.jpg",

                }).then(() => {

                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(
                        addUser({ 
                        uid: uid, 
                        email: email, 
                        displayName: displayName, 
                        photoURL: photoURL 
                    }));

                }).catch((error) => {
                    setErrorMessage(error.message);
                });
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });

        }else {
            //Sign in Logic
            signInWithEmailAndPassword(
                auth, 
                email?.current?.value, 
                password?.current?.value
            )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div className="relative w-full min-h-screen">

            <img className="absolute inset-0 object-cover w-full h-full"
                src={loginPageBgImg} alt="Background image" role="background image"
            />

            <div className="w-full absolute top-0 left-0 z-10">
                <Header />
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-4 pt-20 md:pt-4">
                <div aria-labelledby="login-title"
                    className="w-full max-w-md mx-auto p-6 sm:p-8 md:p-10 rounded-sm bg-black/75 flex flex-col"
                >
                    <h1 className="text-white font-bold text-2xl sm:text-3xl my-3 sm:my-5 text-center sm:text-left" role="header">
                        { isSignInForm ? lang[languageKey].signIn : lang[languageKey].signUp }
                    </h1>

                    <form onSubmit={(e) => e.preventDefault()}
                        className="text-white flex flex-col gap-4 sm:gap-5 my-2" 
                        aria-describedby="login-instructions"
                    >

                        { !isSignInForm && 
                            <>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input ref={name} type="text" placeholder={lang[languageKey].fullName} id="name" name="name" required
                                    className="w-full p-3 sm:p-4 border-1 rounded-sm bg-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </>
                        }

                        <label htmlFor="email" className="sr-only">Email</label>
                        <input ref={email} type="email" placeholder={lang[languageKey].email} id="email" name="email" required
                            className="w-full p-3 sm:p-4 border-1 rounded-sm bg-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        <label htmlFor="password" className="sr-only">Password</label>
                        <input ref={password} type="password" placeholder={lang[languageKey].password} id="password" name="password" required
                            className="w-full p-3 sm:p-4 border-1 rounded-sm bg-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                        { !isSignInForm && 
                            <>
                                <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                                <input ref={confirmPassword} type="password" placeholder={`${lang[languageKey].confirm} ${lang[languageKey].password}`} id="confirmPassword" name="confirmPassword" required
                                    className="w-full p-3 sm:p-4 border-1 rounded-sm bg-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </>
                        }

                        {errorMessage && (
                            <p className="text-[#E50914] text-sm sm:text-base font-bold text-center break-words">
                                {errorMessage}
                            </p>
                        )}

                        <button aria-label="Sign In" onClick={handleButtonClick}
                            className="w-full p-3 sm:p-4 font-bold rounded-sm cursor-pointer bg-[#E50914] hover:bg-red-700 duration-300 ease-in-out text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-300"
                        >
                            { isSignInForm ? lang[languageKey].signIn : lang[languageKey].signUp }
                        </button>

                        <p className="cursor-pointer text-center text-sm sm:text-base">
                            { isSignInForm ? (
                                <>
                                    {`${lang[languageKey].newToNetflix}?`} 
                                    <strong onClick={toggleSignInForm}
                                        className="cursor-pointer font-bold ml-1 hover:underline text-white"
                                    >
                                        {`${lang[languageKey].signUp} ${lang[languageKey].now}`}
                                    </strong>
                                </>
                            ) : (
                                <>
                                    {`${lang[languageKey].alreadyRegistered}?`}
                                    <strong onClick={toggleSignInForm}
                                        className="cursor-pointer font-bold ml-1 hover:underline text-white"
                                    >
                                        {lang[languageKey].signIn}
                                    </strong>
                                </>
                            )}
                        </p>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;