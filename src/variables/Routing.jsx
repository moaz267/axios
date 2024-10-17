import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home/Home";
import NotFound from "../components/NotFound";
import Posts from "../pages/posts/Posts";
import SinglePost from "../pages/posts/SinglePost";

export const Routing = createBrowserRouter([{
    path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "posts", element: <Posts /> },
        { path: "posts/:category/:id/:title", element: <SinglePost /> },
        {path:"*" , element:<NotFound/>}
] }]);
