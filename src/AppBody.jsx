import React from 'react'
import "./AppBody.css"
import SideBar from "./components/SideBar"
import Feed from './components/Feed';
function AppBody() {
    return (
  <div className="app__body">
      <SideBar></SideBar>
      <Feed></Feed>
    </div>
    
        
    )
}

export default AppBody
