import React from "react";
import SendIcon from "@mui/icons-material/Send";
import "./newsletter.scss";
function Newsletter() {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <h4>Subscribe to our newsletter to stay informed of campaigns.</h4>
      <div className="newsletter__container">
        <input type="text" placeholder="fmggmf01@gmail.com" />
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
