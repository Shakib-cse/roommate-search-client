import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home";
import AddFindRoommate from "../Components/AddFindRoommate";
import BrowseListing from "../Components/BrowseListing";
import MyListing from "../Components/MyListing";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import ErrorPage from "../Components/ErrorPage";
import PrivetRoute from "./PrivetRoute";


let router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {index: true, Component: Home},
            {path: '/addtofindroommate', element: <PrivetRoute><AddFindRoommate/></PrivetRoute>},
            {path: '/browselisting', Component: BrowseListing},
            {path: '/mylisting', element: <PrivetRoute><MyListing/></PrivetRoute>},
            {path: '/login', Component: Login},
            {path: '/registration', Component: Registration},
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);
export default router;