import { Icon } from '@material-ui/core'
import React from 'react'
import "./PostFeatures.css"
function PostFeatures({icon,type}) {
    return (
        <div className="features">
            <Icon>{icon}</Icon>
            <p>{type}</p>
        </div>
    )
}

export default PostFeatures
