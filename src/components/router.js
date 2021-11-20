import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Homepage from "../components/homepage"
import Login from "../components/login"
import Todos from "../components/todo"


export const routes: Route[] = [
    {
        path: "/",
        element: <Homepage />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "todo",
        element:<Todos />
            
    }
];

export const location = new ReactLocation();