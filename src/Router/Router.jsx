import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home";
import AddFindRoommate from "../Components/AddFindRoommate";
import BrowseListing from "../Components/BrowseListing";
import MyListing from "../Components/MyListing";
import Login from "../Components/Login";
import Registration from "../Components/Registration";


let router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {index: true, Component: Home},
            {path: '/addtofindroommate', Component: AddFindRoommate},
            {path: '/browselisting', Component: BrowseListing},
            {path: '/mylisting', Component: MyListing},
            {path: '/login', Component: Login},
            {path: '/registration', Component: Registration},
        ]
    }
]);
export default router;