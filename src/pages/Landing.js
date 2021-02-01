import React from "react";
import '../App.css';
import Berklogo from '../berklogo.png'
import Vidpic from '../vid.png'
import Running from '../running.jpg'


const Landing = () => {  
  
    return (
    <>
        <div className="Banner">
            <img src = {Running} className="runfix"></img>
            <div>
            <h2>Running and its Numerous Health Benefits</h2>
            <h2 id = "bottext">Presented by The American Nurses Association</h2>
            <br></br>
            <span>Wednesday, February 10, 2021 --- Friday, February 12, 2021</span>

            </div>
        </div>
        <div className="twocol-row">
            <div className="col1">
                <div className = "currentplay">
                    <h3 className="titleofvid">  <b> Currently Showing: </b>  The Physical Benefits of Running
                        Presented by the American Nurses Association
                    </h3>
                </div>
                <img src={Vidpic} className="vidfix"></img>
                <div className="arrow-right"></div>
                <div className = "toptitle">
                </div>
                <div className = "bottomsyn">
                </div>
                <div className = "toptitle" id = "bot">
                </div>
                <div className = "bottomsyn">
                </div>
                </div>

        

            <div className="col2">
            </div>
        </div>
        <div className = "footer">
        </div>
    </>
      );
  };    
  
  export default Landing;