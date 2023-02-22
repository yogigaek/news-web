import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ContentComp extends React.Component {
  render() {
    return (
      <div className="container text-center" id="bio">
        <h3 className="fw-bold fs-2">My Bio</h3>
        <p className="fs-6 fst-italic fw-light">
          My primary goal is to apply my technical expertise throughout the
          software lifecycle to ensure the production and delivery of products
          and services that meet client specifications. Together with a
          competent software development team, as well as strong personal
          knowledge, skills, and experience in software engineering, I am
          confident that this goal can be achieved. Completing courses at
          eduwork.id as a full-stack developer and solving many problems from
          leetcode, hackerrank, codeforce, and others improved my ability to
          design, troubleshoot, implement, test, and improve software. One of my
          goals is to keep up to date with the latest IT trends and
          technologies. I believe if given the opportunity, I can be a useful
          talent for the company.
        </p>
      </div>
    );
  }
}
