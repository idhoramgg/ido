import React from "react";

export const Contact = () => {
 
  return (
    <div className="container" style={{backgroundColor: 'black', minWidth: '100%', height: '500px', color: 'white'}}>
        <h5 id="contactpage" style={{color: 'white', padding: '20px'}}> Contact Me</h5>
      <form action="mailto:ridhoabdulmajid@gmail.com" method="POST" encType="text/plain">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Your name"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="3"
            placeholder="Enter your messages"
          />
        </div>
        <input className ="btn btn-warning" type="submit" value="Send"/>
      </form>
    </div>
  );
};

export default Contact;
