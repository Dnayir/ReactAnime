import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AboutPage, UsersPage, IndexPage, NotFoundPage, UserPage } from "./pages";
import { default as Layout } from "./layouts";
const App = () => {
    return <Routes>
            <Route path="/" element={< Layout />}>
                <Route path="users" element={<UsersPage />}>
                        <Route path=":id" element={<UserPage />} />
                </ Route>
                <Route path="about" element={< AboutPage />} />
                <Route path="*" element={<NotFoundPage />}/>
            </ Route>

           </ Routes>
}

export default App;