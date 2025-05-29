import { createBrowserRouter, RouterProvider } from "react-router";
/*import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";*/

import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
//import { addUser, removeUser } from "../utils/userSlice.js";

const Body = () => {

    const appRouter = createBrowserRouter ([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;