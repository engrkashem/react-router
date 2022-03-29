import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h2>Hello Friends.. How are You?</h2>
            <p>Parle kisu taka dhar dis.. dst</p>.
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                />)
            }
        </div>
    );
};

export default Friends;