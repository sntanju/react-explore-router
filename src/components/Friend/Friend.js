
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address, username } = props.friend;

    const history = useHistory();
    //console.log(props.friend)

    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/friend/${id}`;

    const handleFriendClick = () => {
        history.push(`/friend/${id}`);
    }

    return (
        <div style = {friendStyle}>
            <h2>I Am: {name} {id}</h2>
            <h3>User Name: {username}</h3>
            <h5>Call Me: {phone}</h5>
            <p>Visit Me: {website}</p>
            <p><small>I Live In: {address.city}</small></p>
            <Link to={url}>Visit Me</Link>

            <br />

            <Link to={url}>
            <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me2</button>

        </div>
    );
};

export default Friend;