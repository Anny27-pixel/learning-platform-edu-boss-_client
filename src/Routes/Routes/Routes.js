import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course/Course";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import Blog from "../../Pages/Shared/Blog/Blog";
import Login from "../../Pages/Shared/Login/Login";
import SignUp from "../../Pages/Shared/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://edu-boss-server.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://edu-boss-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://edu-boss-server.vercel.app/courses/${params.id}`)
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }, {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])