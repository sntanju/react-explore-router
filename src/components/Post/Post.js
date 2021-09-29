import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {title, id} = props.post;
    const history = useHistory();

    const handleClick = () => {
        history.push(`/post/${id}`)
    }


    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post detail</Link>
            <button onClick={handleClick}>Click to see detail</button>
        </div>
    );
};

export default Post;