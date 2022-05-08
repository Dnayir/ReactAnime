import React from 'react';
import { Outlet } from 'react-router-dom';

const UsersPage = () => {
    return <><h1>I am the main users page!</h1>
           <Outlet /></>
}

export default UsersPage;