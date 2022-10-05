import "./contact.scss";
import { Email, LinkedIn, GitHub, Twitter } from "@material-ui/icons";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="wrapper">
        <div className="left">
          <div className="contactDetailsWrapper">
            <div className="contactContainer">
              <div className="email">
                <Email className="contactIcon" />
                <p>alifahed67@gmail.com</p>
              </div>
              <div className="contactDetails socials">
                <a
                  href="https://www.linkedin.com/in/ali-fahed-b94a07230/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn className="contactIcon linkedIn" />
                  <p>Ali Fahed</p>
                </a>
              </div>
              <div className="contactDetails socials">
                <a
                  href="https://github.com/AliFahed"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub className="contactIcon github" />
                  <p>AliFahed</p>
                </a>
              </div>
              <div className="contactDetails socials">
                <a
                  href="https://twitter.com/AliFahed_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="contactIcon twitter" />
                  <p>AliFahed_</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <form
            action="https://getform.io/f/df7d0f48-f5ba-4931-9969-84b868b2291d"
            method="post"
            className="form"
          >
            <h2>Contact Me</h2>
            <div className="inputWrapper">
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Write a Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="sendButton">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
