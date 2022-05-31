import React from 'react';
import './post.css'
import postImg from '../assets/images/post.jpeg'

function Post(props) {
    return (
        <div className="post">
            <img className="postImg" src={postImg} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    this is post title
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc"> 
                This paragraph
                contains a lot of lines
                in the source code,
                but the browser
                ignores it.
                This paragraph
                contains a lot of lines
                in the source code,
                but the browser
                ignores it.
                This paragraph
                contains a lot of lines
                in the source code,
                but the browser
                ignores it.
            </p>
        </div>
    );
}

export default Post;