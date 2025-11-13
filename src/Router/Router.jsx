import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import RegPage from "../Pages/RegPage";
import PrivateRoute from "./PrivateRoute";
import ModelDetail from "../Pages/ModelDetail";
import ViewModel from "../Pages/ViewModel";
import AddModel from "../Pages/AddModel";
import UpdateModel from "../Pages/UpdateModel";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,

        children: [
            {
                index: true,
                element: <Home />,
                loader: () => fetch('http://localhost:3000/models')
            },
            {
                path: "/auth/login",
                element: <LoginPage></LoginPage>
            },
            {
                path: "/auth/register",
                element: <RegPage></RegPage>
            }
            ,
            {
                path: "/models/:id",
                element: (
                    <PrivateRoute>
                        <ModelDetail></ModelDetail>
                    </PrivateRoute>
                )
            },
            {
                path: "/viewModel",
                element: <PrivateRoute>
                    <ViewModel></ViewModel>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:3000/models')
            }
            ,
            {
                path: '/addmodel',
                element: <PrivateRoute>
                    <AddModel></AddModel>
                </PrivateRoute>
            }
            ,
            {
                path: '/updatemodel/:id',
                element: (
                    <PrivateRoute>
                        <UpdateModel></UpdateModel>
                    </PrivateRoute>
                )
            }

        ]
    }
]);
