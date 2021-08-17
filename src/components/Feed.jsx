import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Feed.css"
import MyPicture from "./MyPicture.jpeg";
import PostOption from './PostOption';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Posts from './Posts';
function Feed() {
    return (
        <div className="feed">
            
           <div className="top__container">
               <div className="top__startpost">
                  <Avatar src={MyPicture}></Avatar>
                  
                  <input type="text"  placeholder="Start a Post" />
                  <button className="post__button" >Post</button>
                  
               
               </div>
               <div className="post__options">
                  <PostOption type={"Photo"} color="skyblue" icon={<PhotoIcon></PhotoIcon>}></PostOption>
                  <PostOption type={"Video"} color="green" icon={<YouTubeIcon></YouTubeIcon>}></PostOption>
                  <PostOption type={"Event"} color="yellow" icon={<EventNoteIcon></EventNoteIcon>}></PostOption>
                  <PostOption type={"Write Article"} color="pink" icon={<AssignmentIcon></AssignmentIcon>}></PostOption>
               </div>
           </div>
           <div className="posts">
           <Posts username="Dovkush Sharma" description="This is Demo"
           message="Its Working!!"></Posts>
           </div>
          
        </div>
    )
}

export default Feed
