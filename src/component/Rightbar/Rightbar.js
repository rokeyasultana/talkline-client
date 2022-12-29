import React, { useContext, useState } from 'react';
import './Rightbar.css';

import { FaBookmark, FaDiscourse, FaObjectGroup, FaQuestion, FaRegNewspaper, FaRocketchat } from 'react-icons/fa';
import { FaFileVideo } from 'react-icons/fa';

import {Users} from'../../data/data';
import CloseFriend from '../CloseFriend/CloseFriend';


const Rightbar = () => {

    return (
        <div>
            <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <FaRegNewspaper className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <FaRocketchat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <FaFileVideo  className="sidebarIcon"/>
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <FaObjectGroup className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
          <FaQuestion className="sidebarIcon"/>
            <span className="sidebarListItemText">Questions</span>
          </li>
          
          <li className="sidebarListItem">
          <FaDiscourse className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
        </div>
    );
};

export default Rightbar;