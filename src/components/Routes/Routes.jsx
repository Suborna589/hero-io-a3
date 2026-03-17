import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';


import Installation from '../pages/Installation/Installation';
import Apps from '../pages/Apps/Apps';
import Home from '../pages/Home/Home';

export const router =createBrowserRouter ([

    {
        path:'/',
        Component:Root,

        children:[
        {    index:true,
            loader:() =>fetch('/apps.json'),
             Component:Home, 


        },
        {
            path:'apps',
            Component:Apps, 
        },

        {
            path:'installation',
            Component:Installation

        }

        ]

    }
])