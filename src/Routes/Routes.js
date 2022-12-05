import { createBrowserRouter } from "react-router-dom";
import ServiceDetail from "../Components/ServiceDetail/ServiceDetail";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://assignment-11-server-gilt.vercel.app/threeservices'),
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-gilt.vercel.app/services/${params.id}`),
                element: <ServiceDetail></ServiceDetail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>

            },
            {
                path: '/editreview/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-gilt.vercel.app/review/${params.id}`),
                element: <EditReview></EditReview>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '*',
                element: <Error></Error>
            }



        ]

    }
])