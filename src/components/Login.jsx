import { useState, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./Header.jsx";
import { loginPageBgImg } from "../utils/image.js";
import { checkValidData } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import { addUser } from "../utils/userSlice.js";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

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
                //console.log(user);
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
        <div className="relative w-full h-full">

            <img className="absolute inset-0 object-cover w-full h-screen"
                src={loginPageBgImg} alt="Background image" role="background image"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

            <div className="absolute top-0 left-0 mx-25 my-2">
                <Header />
            </div>

            <div aria-labelledby="login-title"
                className="absolute w-[450px] right-0 left-0 my-30 mx-auto p-10 rounded-sm bg-black/75 flex flex-col"
            >
                <h1 className="text-white font-bold text-3xl my-5" role="header">
                    { isSignInForm ? "Sign In" : "Sign Up" }
                </h1>

                <form onSubmit={(e) => e.preventDefault()}
                    className="text-white flex flex-col gap-5 my-2.5" 
                    aria-describedby="login-instructions"
                >

                    { !isSignInForm && 
                        <>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input ref={name} type="text" placeholder="Full Name" id="name" name="name" required
                                className=" p-3 border-1 rounded-sm bg-gray-900"
                            />
                        </>
                    }

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input ref={email} type="email" placeholder="Email" id="email" name="email" required
                        className=" p-3 border-1 rounded-sm bg-gray-900"
                    />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input ref={password} type="password" placeholder="Password" id="password" name="password" required
                        className=" p-3 border-1 rounded-sm bg-gray-900"
                    />

                    { !isSignInForm && 
                        <>
                            <label htmlFor="password" className="sr-only">Confirm Password</label>
                            <input ref={confirmPassword} type="password" placeholder="Confirm Password" id="password" name="password" required
                                className=" p-3 border-1 rounded-sm bg-gray-900"
                            />
                        </>
                    }

                    <p className="text-[#E50914] text-[1rem] font-bold mx-auto">{errorMessage}</p>

                    <button aria-label="Sign In" onClick={handleButtonClick}
                        className="p-2 font-bold rounded-sm cursor-pointer bg-[#E50914] hover:bg-red-700 duration-300 ease-in-out"
                    >
                        { isSignInForm ? "Sign In" : "Sign Up" }
                    </button>

                    <p onClick={toggleSignInForm} className="cursor-pointer">
                        { isSignInForm ? (
                            <>
                                New to Netflix? 
                                <strong onClick={toggleSignInForm}
                                    className="cursor-pointer font-bold mx-2.5 hover:underline"
                                >
                                    Sign Up now.
                                </strong>
                            </>
                        ) : (
                            <>
                                Already registered?
                                <strong onClick={toggleSignInForm}
                                    className="cursor-pointer font-bold mx-2.5 hover:underline"
                                >
                                    Sign In
                                </strong>
                            </>
                        )}
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Login;