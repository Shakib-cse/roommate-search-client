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
import TermsAndConditions from "../Components/TermsAndConditions";
import FAQ from "../Components/FAQ";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import PostsDetails from "../Components/PostsDetails";
import Contact from "../Components/Contact";
import DashboardPage from "../Components/Dashboard";


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
            {path: '/posts/:id', element: <PrivetRoute><PostsDetails/></PrivetRoute>},
            {path: '/contact', Component: Contact},
            {path: '/dashboard', element: <PrivetRoute><DashboardPage/></PrivetRoute>},
        ]
    },
    {
        path: "/termsandconditions",
        element: <TermsAndConditions/>
    },
    {
        path: "/faq",
        element: <FAQ/>
    },
    {
        path: "/privacypolicy",
        element: <PrivacyPolicy/>
    },
    {
        path: "*",
        Component: ErrorPage
    }
]);
export default router;