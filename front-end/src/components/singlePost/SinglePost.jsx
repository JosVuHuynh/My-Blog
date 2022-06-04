import React from 'react';
import './singlePost.css'
import postImg from '../../assets/images/post.jpeg'


function SinglePost(props) {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={postImg} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    this is single post title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque dolore et ex deserunt debitis quam corrupti eligendi, illum hic repellat nobis unde praesentium est asperiores enim, perspiciatis ipsa nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque dolore et ex deserunt debitis quam corrupti eligendi, illum hic repellat nobis unde praesentium est asperiores enim, perspiciatis ipsa nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque dolore et ex deserunt debitis quam corrupti eligendi, illum hic repellat nobis unde praesentium est asperiores enim, perspiciatis ipsa nesciunt?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eaque dolore et ex deserunt debitis quam corrupti eligendi, illum hic repellat nobis unde praesentium est asperiores enim, perspiciatis ipsa nesciunt?
                </p>
            </div>
           
        </div>
    );
}

export default SinglePost;