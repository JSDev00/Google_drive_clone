import React from 'react'
import google from '../../media/google.png'; 
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import HelpIcon from '@material-ui/icons/Help';
import SettingsIcon from '@material-ui/icons/Settings';


import '../../styles/Header.css';


function index({userPhoto}) {
  
    return (
        <div className="header">
            <div className="header_logo">
                <img  src={google} alt="" />
                <span>Drive</span>    
            </div>
            <div className="header_searchContainer">
                <div className="header_searchBar">
                <SearchIcon />
                <input type="text" placeholder="Search Here" />
                <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header_icons">
                <span>
                    <HelpIcon/>
                    <SettingsIcon/>

                </span>
                <AppsIcon/>
                <img src={userPhoto} alt="Profile Icon" />
            </div> 
        </div>
    )
}

export default index
