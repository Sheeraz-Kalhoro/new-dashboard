import React from "react";
import './sideNav.css'
import {Link} from 'react-router-dom'
import {MdSpaceDashboard,MdCloud,} from 'react-icons/md'
import {FaCoins, FaCogs,} from 'react-icons/fa'
import { Avatar } from "@mui/material";
const SideNav = () => {
  return (
    <div className="side-navigation">
      <div className="avatar">
      <Avatar alt='Sadam' src='/static' sx={{width:'70px', height:'70px'}}/>

      </div>
      <nav>
        <Link to='/' className="nav-links"><MdSpaceDashboard /> Dashboard</Link>
        <Link to='/weather'className="nav-links"><MdCloud /> Weather</Link>
        <Link to='/crypto'className="nav-links"><FaCoins/>Crypto</Link>
        <Link to='/about'className="nav-links">About</Link>
        <Link to='/settings'className="nav-links"><FaCogs/>Settings</Link>
      </nav>
      
    </div>
  );
};

export default SideNav;
