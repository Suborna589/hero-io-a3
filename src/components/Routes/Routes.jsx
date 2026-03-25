import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';


import Installation from '../pages/Installation/Installation';
import Apps from '../pages/Apps/Apps';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/AppDetails/AppDetails';
import ErrorPage from '../ErrorPage/ErrorPage';

export const router =createBrowserRouter ([

    {
        path:'/',
        Component:Root,
        
        errorElement:<ErrorPage></ErrorPage>,
        children:[
        {    index:true,
            loader:() =>fetch('/apps.json'),
             Component:Home, 


        },
        {
            path:'apps',
            loader:()=>fetch("/apps.json"),
            Component:Apps, 
        },

        {
            path:'installation',
            loader:()=>fetch("/apps.json"),
            Component:Installation,

        }, 
        {
            path:"/appDetails/:id",
            loader:()=>fetch("./apps.json"),
            Component:AppDetails, 

        }

        ]

    }
])