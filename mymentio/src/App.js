import "./OtpPage.css";

const OtpPage = () => {
  return (
    <div className="otp-page">
      <div className="otp-page-child" />
      <div className="otp-page-inner">
        <img className="frame-child" alt="" src="/ellipse-1@2x.png" />
      </div>
      <div className="site-name-wrapper">
        <div className="site-name">Site Name</div>
      </div>
      <a className="log-in-wrapper">
        <div className="log-in">Log in</div>
      </a>
      <a className="get-started-wrapper">
        <div className="get-started">{`Get started `}</div>
      </a>
      <div className="opt-has-been-sent-to-capstonea-wrapper">
        <div className="opt-has-been-container">
          <span>
            <span>OPT has been sent to</span>
          </span>
          <span>
            <span>{` `}</span>
          </span>
          <span className="capstonealtgmailcom">
            <span>CapstoneAlt@gmail.com</span>
            <span className="span">{` `}</span>
          </span>
        </div>
      </div>
      <div className="opt-wrapper">
        <div className="opt">OPT</div>
      </div>
      <div className="resend-opt-wrapper">
        <a className="resend-opt" href="https://google.com">{`Resend OPT  `}</a>
      </div>
      <div className="didnt-receive-a-code-wrapper">
        <div className="didnt-receive-a">{`Didn’t receive a code?  `}</div>
      </div>
      <div className="send-sms-wrapper">
        <a className="send-sms" href="https://google.com">
          Send Sms
        </a>
      </div>
      <div className="mins-left">50 mins left</div>
      <div className="frame-parent">
        <input className="frame-item" type="text" />
        <input className="frame-inner" type="text" />
        <input className="frame-input" type="text" />
        <input className="frame-child1" type="text" />
        <input className="frame-child2" type="text" />
      </div>
      <div className="home-parent">
        <a className="home">Home</a>
        <a className="blogs">Blogs</a>
        <a className="about-us">About Us</a>
        <a className="contact-us">Contact Us</a>
        <a className="faqs">FAQs</a>
      </div>
    </div>
  );
};

export default OtpPage;
