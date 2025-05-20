import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Pages/HomeLayout";
import Home from "../Components/Home";


let router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {index: true, Component: Home},
        ]
    }
]);
export default router;