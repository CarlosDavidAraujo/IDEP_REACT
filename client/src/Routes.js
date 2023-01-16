import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Login from "./Pages/Login";
import Vagas from "./Pages/Vagas";
import MinhasVagas from "./Pages/MinhasVagas";
import Dashboard from "./Pages/DashBoard";

const router = createBrowserRouter([
    {path: '/', element: <Home/>, errorElement: <ErrorPage/>},
    {path: 'cadastro', element: <Cadastro/>, errorElement: <ErrorPage/>},
    {path:'login', element: <Login/>, errorElement: <ErrorPage/>},
    {path: 'vagas', element: <Vagas/>, errorElement: <ErrorPage/>},
    {path: 'minhas-vagas', element: <MinhasVagas/>, errorElement: <ErrorPage/>},
    {path: 'dashboard', element: <Dashboard/>, errorElement: <ErrorPage/>}
]);

export default router;