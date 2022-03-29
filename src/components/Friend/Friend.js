import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({ friend: { name, username, id } }) => {

    let navigate = useNavigate();

    const showFriendDetails = () => {
        const path = `/friend/${id}`
        navigate(path)
    }

    return (
        <div >
            <h1>{name}</h1>
            <button onClick={showFriendDetails}> {username}, ID: {id}</button>


        </div>
    );
};

export default Friend;