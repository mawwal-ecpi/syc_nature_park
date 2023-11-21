import React, { Component } from "react";
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2>Book Your Trip Today!</h2>
                <form id="contact-form">
                    <label id="name">Name: <input className="form-input" type="text" name="name"/></label>
                    <label id="phone">Phone: <input className="form-input" type="text" name="phone"/></label>
                    <input id="submit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Contact;