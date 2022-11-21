import React from 'react';
import {Routes as RouterProvider, Route} from "react-router-dom";
import Jobs from "../pages/jobs/Jobs";
import JobTitle from "../pages/jobTitle/JobTitle";

const Routes = () => {
    return (
        <RouterProvider>
            <Route path="/" element={<Jobs/>}/>
            <Route path="/:id" element={<JobTitle/>}/>
        </RouterProvider>
    );
};

export default Routes;