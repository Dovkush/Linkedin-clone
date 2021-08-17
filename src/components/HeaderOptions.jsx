import React from 'react'

import { Avatar, Icon} from '@material-ui/core';
import "./HeaderOptions.css"
function HeaderOptions({avater,icon,title}) {

    return (
       
        <div className="headerOptions">
           {icon&&<Icon className="title">{icon}</Icon>}
           {avater&&<Avatar src={avater} className="profileimage"></Avatar>}
          <h3 className="title">{title}</h3>
        </div>
           
        
    )
}

export default HeaderOptions
