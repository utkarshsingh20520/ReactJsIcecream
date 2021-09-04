import React from "react";
import classes from "./Header.module.css";
import Cartbutton from "./Cartbutton";
import User from "./User";
import {Link} from 'react-router-dom';
import Iconscont from "./Iconscont";

const Header = props =>{
    return(
        <>
          <div className={classes.header}>
              <h1>
                  <span>IceCream Parlour</span>
              </h1>
              <Iconscont ondisplaycart = {props.onshowcrt}/>
          </div>
          <div className={classes.images}>
              <h1>Ice Cream Parlour</h1>
              
          </div>
        </>
    );
}

export default Header;