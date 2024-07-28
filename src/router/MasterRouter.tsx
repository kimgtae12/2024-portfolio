import { MainPage } from 'page/MainPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const rootPath = '/';

export const MasterRouter = createBrowserRouter([
    {
        path : rootPath,
        element : <MainPage />
    }
]
)