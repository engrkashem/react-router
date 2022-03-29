import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({ friend: { name, username, id } }) => {

    let navigate = useNavigate();

    const showFriendDetails = () => {
        const path = `/Friends/${id}`
        navigate(path)
    }

    return (
        <div >
            <h1>{name}</h1>
            <Link to={'/Friends/' + id}>Show DEtails</Link>
            <button onClick={showFriendDetails}> {username}, ID: {id}</button>


        </div>
    );
};

export default Friend;