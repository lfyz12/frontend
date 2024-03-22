import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import { Context } from '..';
import { authRoute, publicRoutes } from '../Routes';
import Home from './Home/Home';
const AppRoters = () => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {user.auth && authRoute.map(({path, element}) => 
            <Route key={path} path={path} element={element} />)}

            {publicRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element} />)}

            <Route path='*' element={<Home/>}/>
        </Routes>
    );
};

export default AppRoters;