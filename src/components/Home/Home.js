import React, { Component } from "react";
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div id="home-style">
                <h2>Welcome To Syc Nature Park!</h2>
                <p>We provide indoor and outdoor lodging to fit all of your
                     camping needs. Stop by today to join in on family fun for 
                     everyone!
                </p>

                <p>Call today at <a href=''>864-555-5555</a></p>
            </div>
        );
    }
}

export default Home;