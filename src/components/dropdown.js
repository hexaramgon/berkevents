import React from 'react';
import '../App.css';
import Thumb from '../thumbnail.jpg'
import Cal from '../calander.png'




/* Bootstrap Button importated wrong, have to fix in later build s*/

class Button extends React.Component {
    componentDidMount() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }
    }




    render() {
      return (
        // <div className="dropdown">
        //     <h4 className="droptext">{this.props.text}</h4>
        //     <button className="dropbutt">+</button>
        // </div>

        <>

        <button class="collapsible">{this.props.text}</button>
        <div class="content">
            <div className="section">
                <div className = "firstpart">
                    <h4>9:30 a.m</h4>
                    <h4>11:00 a.m</h4>
                    <div className = "lower">
                    <a target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Test+Event&dates=20210208T173000Z/20210208T193000Z&sprop=website:open.berkeley.edu&location&details=This+is+just+a+test.&website=https://test-ets.pantheon.berkeley.edu/events">
                        <span className="calandarpart">Add to Calendar</span>
                    </a>
                        <img src={Cal} className="calfix"></img>
                    </div>
                </div>
                <div>
                    <h4 className= "testitle">The Wonders of Running Presented By Lebron James </h4>
                    <p className="colorfix">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <img src={Thumb} className="thumbnail"></img>
            </div>
            <hr/>
            <div className="section">
                <div className = "firstpart">
                    <h4>11:30 a.m</h4>
                    <h4>12:00 a.m</h4>
                    <div className = "lower">
                    <a target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Test+Event&dates=20210208T173000Z/20210208T193000Z&sprop=website:open.berkeley.edu&location&details=This+is+just+a+test.&website=https://test-ets.pantheon.berkeley.edu/events">
                        <span className="calandarpart">Add to Calendar</span>
                    </a>

                        <img src={Cal} className="calfix"></img>
                    </div>
                </div>
                <div>
                    <h4 className= "testitle">How We Can Surpass Our Limits Presented By Usain Bolt </h4>
                    <p className="colorfix">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>                
                <img src={Thumb} className="thumbnail"></img>
            </div>
            <hr/>
            <div className="section">
                <div className = "firstpart">
                    <h4>12:00 a.m</h4>
                    <h4>1:30 p.m</h4>
                    <div className = "lower">
                    <a target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Test+Event&dates=20210208T173000Z/20210208T193000Z&sprop=website:open.berkeley.edu&location&details=This+is+just+a+test.&website=https://test-ets.pantheon.berkeley.edu/events">
                        <span className="calandarpart">Add to Calendar</span>
                    </a>

                        <img src={Cal} className="calfix"></img>
                    </div>
                </div>
                <div>
                    <h4 className= "testitle">What Is Running? Presented By Vsauce</h4>
                    <p className="colorfix">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>                    
                <img src={Thumb} className="thumbnail"></img>
            </div>
            <hr/>
            <div className="section">
                <div className = "firstpart">
                    <h4>2:00 p.m</h4>
                    <h4>3:00 p.m</h4>
                    <div className = "lower">
                    <a target="_blank" href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Test+Event&dates=20210208T173000Z/20210208T193000Z&sprop=website:open.berkeley.edu&location&details=This+is+just+a+test.&website=https://test-ets.pantheon.berkeley.edu/events">
                        <span className="calandarpart">Add to Calendar</span>
                    </a>

                        <img src={Cal} className="calfix"></img>
                    </div>
                </div>
                <div>
                    <h4 className= "testitle">Running To Fight Obesity Presented by Michelle Obama</h4>
                    <p className="colorfix">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>                    
                <img src={Thumb} className="thumbnail"></img>
            </div>

        </div>
        </>
    
      );
    }
  }


  export default Button;