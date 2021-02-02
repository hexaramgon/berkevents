import React from "react";
import '../App.css';
import Berklogo from '../berklogo.png'
import Vidpic from '../vid.png'
import Running from '../running.jpg'
import Dropdown from '../components/dropdown.js'
import Berk from '../berkalerk.png'




const Landing = () => {  
  
    return (
    <>
        <div className="Banner">
            <img src = {Running} className="runfix"></img>
            <div>
                <div className="eventitle">
                    <h2>Running and its Numerous Health Benefits</h2>
                    <h2 id = "bottext">Presented by The American Nurses Association</h2>
                    <br></br>
                    <span>Wednesday, February 10, 2021 --- Friday, February 12, 2021</span>
                </div>
                <p className="synop">Join four former Secretaries of Homeland Security for a conversation about current issues in homeland security, the overlap between security and politics, and how our country can move forward by embracing the challenges—and opportunities—the Biden-Harris administration will face in their first year.</p>
                <p className="synop">This is the inaugural event of the Center for Security in Politics. This event is also a part of the campus's Berkeley Conversation series(link is external).</p>
                <p className="synop">If you wish to submit a question to the panelists, you can do so using this form.</p>
            </div>
        </div>
        <div className="container">
        <Dropdown text="Wednesday, February 10, 2021"></Dropdown>
        <Dropdown text="Thursday, February 11, 2021"></Dropdown>
        <Dropdown text="Friday, February 12, 2021"></Dropdown>
        </div>
        <div className="twocol-row">
            <div className="col1">
                <div className = "currentplay">
                    <h3 className="titleofvid">  <b> FEATURED LIVE EVENT: </b> </h3>
                    <h3 className="titleofvid" id = "rats">No current showings, come back February 10!</h3>
                </div>
                <img src={Vidpic} className="vidfix"></img>
                {/* <div className="arrow-right"></div> */}
                <div className = "bottomsyn">
                    <h3 id ="temptitle"> About the Center for Security in Politics </h3>
                    <p>
                    The mission of the Center for Security in Politics (CSP) is to support research, curriculum, and convenings that will bring students, academics, and leading political practitioners together to address critical global risks, to translate research and analysis into actionable solutions for policymakers, thought leaders and elected officials, and to train a diverse generation of security professionals for careers in public service.
                    </p>
                    <p>
                    The Center is directed by Janet Napolitano who has a unique background as a former federal and state prosecutor, Arizona governor, and the nation’s longest-serving Secretary of Homeland Security. Her hallmark career in public service has placed her at the nexus of politics and security for more than 30 years. Drawing on her experience and international reach, she will oversee a Center that is interdisciplinary, forward-looking, and an epicenter of thought leadership and practical application.
                    </p>
                </div>
                </div>
            <div className="col2">
                <div className="speakertitle">
                    <h3 className ="titleofvid">Featured Speakers</h3>
                </div>
                <div className = "yellow">
                <h3 id ="temptitle"> Accessbility </h3>
                    <p>This event will have closed captioning. If you require an accommodation for effective communication or information about campus mobility access features in order to fully participate in this event, please contact Hannah Yung at hannahty@berkeley.edu(link sends e-mail)(link sends e-mail)(link sends e-mail). Please contact us at least 7-10 days in advance of the event, and provide as much advance notice as possible.          
                    </p>
                </div>
            </div>
        </div>
        <div className = "footer">
            <div className="left-col">
                <img src={Berk} id = "berkfix"></img>
            <p>Copyright © 2021 UC Regents; all rights reserved</p>
            <p>Created by the Berkeley Audio Visual Team</p>
            <p>Privacy Statement</p>
            </div>
            <div className="right-col">
            <p>Subscribe to the UC Berkeley Events Youtube Channel</p>
            <p>Connect with us on Facebook</p>
            <p>Follow us on Twitter </p>
            </div>
        </div>
    </>
      );
  };    
  
  export default Landing;