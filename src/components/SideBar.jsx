import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"
import MyPicture from "./MyPicture.jpeg";
function SideBar() {
    function sidebarTitle(title){
        return (
            <div className="side__barTitle">
                <p>{title}</p>
            </div>
        )
    }
    return (
        <div className="side__bar">
           <div className="side__bartopcard">
              <div className="top">
              <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg" alt="" />
              </div>
              <div className="userdata">
                  <Avatar className="profileimg" src={MyPicture}></Avatar>
                
                  <h3>Dovkush Sharma</h3>
                  <p>Student at Dronachrya College of Engineering</p>
                  
                
              </div>
              <div className="side__barstats">
             <div className="stats">
             <h4>Connections</h4>
             <h4 className="stats_number">2435</h4>
                 </div>  
            <div className="stats">
            <h4>Who viewed your profile</h4>
            <h4 className="stats_number">2000</h4>
            </div>
           
           </div>
           </div>
           <p className="sidebar__botton">
               Recent
              {sidebarTitle("# react.js")}
              {sidebarTitle("# programming")}
              {sidebarTitle("# javascript")}
              {sidebarTitle("# Node.js")}
              {sidebarTitle("# Java")}
              {sidebarTitle("# SoftwareEngineering")}
              {/* {sidebarTitle("#react")} */}
           </p>
           
        </div>
    )
}

export default SideBar
