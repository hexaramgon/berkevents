import React from "react";
import '../App.css';

import {
    useLocation
  } from "react-router-dom";

const Error = () => {  

    const { pathname } = useLocation()
  
    return (
      <div className="App">
        <h6 className="errormsg">Oops, we couldn't find <code>{pathname}</code></h6>
        <h6 className="errormsg">Make sure you're enering the right URL</h6>
    </div>      
    );
};

export default Error;