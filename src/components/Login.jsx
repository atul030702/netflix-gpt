import { useState } from "react";

import Header from "./Header.jsx";
import { loginPageBgImg } from "../utils/image.js";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

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

                <form className="text-white flex flex-col gap-10 my-2.5" aria-describedby="login-instructions">

                    { !isSignInForm && 
                        <>
                            <label htmlFor="name" className="sr-only">Full Name</label>
                            <input type="text" placeholder="Full Name" id="name" name="name" required
                                className=" p-3 border-1 rounded-sm bg-gray-900"
                            />
                        </>
                    }

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" placeholder="Email" id="email" name="email" required
                        className=" p-3 border-1 rounded-sm bg-gray-900"
                    />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" placeholder="Password" id="password" name="password" required
                        className=" p-3 border-1 rounded-sm bg-gray-900"
                    />

                    <button aria-label="Sign In" className="p-2 font-bold rounded-sm cursor-pointer bg-[#E50914] hover:bg-red-700 duration-300 ease-in-out">
                        { isSignInForm ? "Sign In" : "Sign Up" }
                    </button>

                    <p onClick={toggleSignInForm} className="cursor-pointer">
                        { isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign in now." }
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Login;