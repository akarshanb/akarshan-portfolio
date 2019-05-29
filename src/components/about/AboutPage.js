import React from "react";
import "./AboutPage.scss";
import picture from "../../resources/Ilus.jpg"
import img from "../../resources/path1580.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="loader-container w100 h100">
            <div className="homePage flex w100 h100">
                <div className='pageHeading'>
                    <div>
                        <span className="first-line">HELLO..</span>
                    </div>
                    <div>
                        <span className="second-line">I AM AKARSHAN BANSAL</span>
                    </div>
                    <div>
                        <span className="third-line">FULL STACK DEVELOPER</span>
                    </div>
                    <div className="chevron-icon">
                        <FontAwesomeIcon icon={faChevronCircleDown} size="3x" style={{ color: '#4968eb' }} />
                    </div>
                </div>
                <div className="img-aboutme">
                    <img src={picture}></img>
                </div>
            </div>
        </div>)
    }

}

export default AboutPage;

