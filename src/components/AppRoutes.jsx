import React from 'react';
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import {routes} from "../router/routes";
import {BrowserRouter as Router, Link, Routes, Route, Redirect} from "react-router-dom";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {
                    routes.map((route) =>
                        <Route key={route.path} element={route.component} path={route.path} exact={route.exact} />
                    )
                }
            </Routes>

            {/*<Routes>*/}
            {/*    <Route path="/home" element={<Home/>} />*/}
            {/*    <Route path="/posts" element={<Posts/>} />*/}
            {/*</Routes>*/}
        </div>
    );
};

export default AppRoutes;