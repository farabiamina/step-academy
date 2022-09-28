import Home from "../pages/Home";
import Posts from "../pages/Posts";
import Post from "../pages/Post";
import Error from "../pages/Error";

export const routes = [
    {path: "/home", component: <Home/>, exact: true},
    {path: "/posts/:id", component: <Post/>, exact: false},
    {path: "/posts", component: <Posts/>, exact: false},
    {path: "*", component: <Error/>, exact: false},
]