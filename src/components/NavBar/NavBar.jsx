import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to="/Profile" activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className={`${classes.item} ${classes.active}`}><NavLink to="/Dialogs" activeClassName={classes.activeLink}>Message</NavLink></div>
            <div className={classes.item}><NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink></div>
            <div className={classes.item}><NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink></div>
            <div className={classes.item}><NavLink to="/Settings" activeClassName={classes.activeLink}>Settings</NavLink></div>
            <div className={classes.item}><NavLink to="/Friends" activeClassName={classes.activeLink}>Friends</NavLink></div>
        </nav>
    );
}
export default NavBar;