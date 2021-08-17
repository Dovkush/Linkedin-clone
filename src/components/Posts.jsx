import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Posts.css"
import MyPicture from "./MyPicture.jpeg";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import PostFeatures from './PostFeatures';
function Posts({ username, description, message, profileUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar ></Avatar>
                <div className="post__info">
                    <h4>{username}</h4>
                    <p>{description}</p>
                </div>

            </div>
            <div className="post__body">
                <p>
                    {message}
                </p>
            </div>
           <div className="post__features">
              <PostFeatures icon={<ThumbUpAltIcon></ThumbUpAltIcon>} type="Like"></PostFeatures>
              <PostFeatures icon={<ChatIcon></ChatIcon>} type="Comment"></PostFeatures>
              <PostFeatures icon={<ShareIcon></ShareIcon>} type="Share"></PostFeatures>
              <PostFeatures icon={<SendIcon></SendIcon>} type="Send"></PostFeatures>
           </div>

        </div>
    )
}

export default Posts
