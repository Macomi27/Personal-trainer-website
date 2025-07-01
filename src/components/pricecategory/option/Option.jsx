import React from "react"
import "./Option.css"

const Option = () => {
  return (
    <section className="contact-section">
       <div className="contact-container">
          <h2 className="contact-head">Need another option?</h2>
          <p className="contact-p">Write to me and we will adjust the plan to your needs</p>

          <form className="contact-form">
            <div className="form-group">
              <label For="email" className="form-label">Your e-mail:</label>
              <input type="email" id="email" className="form-input" placeholder="address@email.com" required/>
            </div>

            <div className="form-group">
              <label For="fullname" className="form-label">Fullname:</label>
              <input type="text" id="fullname" className="form-input" placeholder="your name" required/>
            </div>
            
            <div className="form-group">
              <label For="message" className="form-label">Message:</label>
              <textarea id="message" className="form-textarea" placeholder="Enter your message here" required/>
            </div>
            {/* <button type="submit" className="send-btn">SEND</button> */}
          </form>
          <button type="submit" className="send-btn">SEND</button>
        </div>
    </section>
  );
};

export default Option;

