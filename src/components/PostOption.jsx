import { Icon } from '@material-ui/core'
import React from 'react'
import "./PostOption.css"

function PostOption({type,icon,color}) {
    console.log(color);
    return (
     
            <div className="post__option">
         <Icon style={{color:`${color}`}}>{icon}</Icon>
         <h4>{type}</h4>
          </div>
       
    )
}

export default PostOption
