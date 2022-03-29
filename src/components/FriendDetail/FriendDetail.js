import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [friendId])

    return (
        <div>
            <h2>This is the details of a JIGRIIII: {friendId}</h2>
            <h3>Nama: {friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p>City: {friend.address?.city}</p>
            <p><small>Lat: {friend.address?.geo.lat}</small></p>
        </div>
    );
};

export default FriendDetail;