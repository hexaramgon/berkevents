import React from 'react';
import '../App.css';
import Berk from '../berkalerk.png'
import Youtube from '../IMG_0920.png'
import Facebook from '../IMG_2412.png'
import Twitter from '../IMG_6977.png'









/* Bootstrap Button importated wrong, have to fix in later build s*/

class Footer extends React.Component {





render() {
    return (
        
    <div className = "footer">
        <div className="left-col">
            <img src={Berk} id = "berkfix"></img>
            <span className="footertext">Copyright © 2021 UC Regents; all rights reserved</span>
            <span className="footertext">Created by the Berkeley Audio Visual Team</span>
            <span className="footertext">Privacy Statement</span>
        </div>
        <div className="right-col">
            <div className="fire">
                <span className="footertextv2">Subscribe to the UC Berkeley Events Youtube Channel</span>
                {/* <img src={Youtube} className="iconfix"></img> */}
            </div>
            <div className="fire">
                <span className="footertextv2">Connect with us on Facebook</span>
                {/* <img src={Facebook} className="iconfix"></img> */}
            </div>
            <div className="fire">
                <span className="footertextv2">Follow us on Twitter </span>
                {/* <img src={Twitter} className="iconfix"></img> */}

            </div>
        </div>
    </div>

    );
}
}


export default Footer;