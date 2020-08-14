import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'

const Contact = props => {
    return (
<div>
  <div className="container">
    <div className="main">
      <div className="contact">				
        <div className="contact_info">
          <h2>get in touch</h2>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424396.3176723366!2d150.92243255000002!3d-33.7969235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney+NSW%2C+Australia!5e0!3m2!1sen!2sin!4v1430912648478" width="100%" height={250} frameBorder={0} style={{border: 0}} />
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form method="post" action="contact-post.html">
            <div>
              <span><label>Name</label></span>
              <span><input name="userName" type="text" className="textbox" /></span>
            </div>
            <div>
              <span><label>E-mail</label></span>
              <span><input name="userEmail" type="text" className="textbox" /></span>
            </div>
            <div>
              <span><label>Mobile</label></span>
              <span><input name="userPhone" type="text" className="textbox" /></span>
            </div>
            <div>
              <span><label>Subject</label></span>
              <span><textarea name="userMsg" defaultValue={" "} /></span>
            </div>
            <div>
              <span><input type="submit" className defaultValue="Submit us" /></span>
            </div>
          </form>
        </div>
        <div className="clearfix" />		
      </div>
    </div>
  </div>
</div>

    )
}

Contact.propTypes = {

}

export default Contact
