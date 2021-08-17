import React from 'react'
import './Header.css'
import { Input, AppBar, Toolbar, Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MyPicture from "./MyPicture.jpeg";
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header__search">
                    <SearchIcon></SearchIcon>
                    <input type="text" />
                </div>

            </div>
            <div className="header_options">
                <HeaderOptions icon={<HomeIcon></HomeIcon>} title={"Home"}></HeaderOptions>
                <HeaderOptions icon={<PeopleIcon></PeopleIcon>} title={"MyNetwork"}></HeaderOptions>
                <HeaderOptions icon={<WorkIcon></WorkIcon>} title={"Work"}></HeaderOptions>
                <HeaderOptions icon={<ChatIcon></ChatIcon>} title={"Messaging"}></HeaderOptions>
                <HeaderOptions icon={<NotificationsIcon></NotificationsIcon>} title={"Notifications"}></HeaderOptions>
                <HeaderOptions  title="me" avater={MyPicture} ></HeaderOptions>
             </div>


        </div>
    )
}

export default Header
{/* <div className="header__left">
<img  className="logo" src="https://image.flaticon.com/icons/png/512/174/174857.png"></img>
 
 <div className="header_search">
 <SearchIcon className="searchicon"></SearchIcon>
  <input className="searchbar" type="text" />
 </div>
</div> */}
