import React from "react";
import '../App.css';
import Bear from '../bear.gif'

import {
    useLocation
  } from "react-router-dom";

const ContactUs = () => {  

    const { pathname } = useLocation()
  
    return (
      <div className="other">
        <img src={Bear} className="bear"></img>
        <div className="subother">
            <h6>Well this is awkward... looks like we're still working here. </h6>
            <h6>Come back in a few days, we should be done by then.</h6>
        </div>
    </div>      
    );
};

export default ContactUs;