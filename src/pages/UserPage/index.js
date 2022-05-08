import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return <>
            <h1>I display information about one user!</h1>
            <i>(Specifically user {id})</i>
            <button onClick={handleClick}>Back</button>
            <button onClick={() => navigate("/about")}>About</button>
           </>
}

export default UserPage;