import React from "react";
import '../App.css';
import Berklogo from '../berklogo.png'
import Vidpic from '../vid.png'
import Running from '../running.jpg'
import Dropdown from '../components/dropdown.js'
import Berk from '../berkalerk.png'
import Speaker from '../components/speaker.js'
import Footer from "../components/footer";




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
        <div className = "speakerbios">
            <h3 className="titleofvid">  <b> FEATURED SPEAKERS </b> </h3>
            <div className="speakerbiorow">
            <Speaker></Speaker>    
            <Speaker typer="extra"></Speaker>     
       
        

            </div>
        </div>

        <div className="twocol-row">

            <div className="col1">
            <h3 id ="titleofvid"> <b>ABOUT THE CENTER FOR SECURITY IN POLITICS </b> </h3>
                <div className = "bottomsyn">
                    <p className="synop">
                    The mission of the Center for Security in Politics (CSP) is to support research, curriculum, and convenings that will bring students, academics, and leading political practitioners together to address critical global risks, to translate research and analysis into actionable solutions for policymakers, thought leaders and elected officials, and to train a diverse generation of security professionals for careers in public service.
                    </p>
                    <p className="synop">
                    The Center is directed by Janet Napolitano who has a unique background as a former federal and state prosecutor, Arizona governor, and the nation’s longest-serving Secretary of Homeland Security. Her hallmark career in public service has placed her at the nexus of politics and security for more than 30 years. Drawing on her experience and international reach, she will oversee a Center that is interdisciplinary, forward-looking, and an epicenter of thought leadership and practical application.
                    </p>
                </div>
                <div className = "alterego">
                </div>
                </div>
            <div className="col2">
            <h3 id ="titleofvid"> <b>ACCESIBILITY </b> </h3>
                <div className = "bottomsyn" id = "otheraxx">
                        <p className="synop">
                        This event will have closed captioning. If you require an accommodation for effective communication or information about campus mobility access features in order to fully participate in this event, please contact Hannah Yung at hannahty@berkeley.edu(link sends e-mail)(link sends e-mail)(link sends e-mail). Please contact us at least 7-10 days in advance of the event, and provide as much advance notice as possible.                    </p>
                </div>
            <div className = "alteregotwo">
             </div>
            </div>
            </div>
            <Footer></Footer>
    </>
    
      );
  };    
  
  export default Landing;