import React from 'react';
import '../App.css';

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
            <p className="colorfix">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </>
    
      );
    }
  }


  export default Button;