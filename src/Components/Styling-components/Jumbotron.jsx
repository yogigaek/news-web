import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class JumbotronComp extends React.Component {
  render() {
    return (
      <div className="p-5 mb-4 bg-light rounded-3 jumbotron">
        <div className="container-fluit py-5 text-center">
          <p className="fs-5 fst-italic mt-5">My Portfolio</p>
          <h1 className="display-4">Muhammad Yogi</h1>
          <button className="btn btn-warning border border-dark btn-sm mt-5 shadow-sm text-white px-3 py-2">
            <a
              href="https://www.linkedin.com/in/muhammad-yogi-779483248/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn Profile
            </a>
          </button>
        </div>
      </div>
    );
  }
}
