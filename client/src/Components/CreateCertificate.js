import React, { Component } from "react";
import Layout from "../Components/AdminLayout";
import CertificateTamplet from "../ImagesAndLogos/certificateTamplet.png";
import "../Styles/CreateCertificateStyles.css";
import { saveAsPng } from "save-html-as-image";
import axios from "axios";
import QRCode from "./../Components/CreateQrCodeForCertificate";

class createCertificate extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "Ravi Lour",
    Course: "Full Stack Development",
    QrLink: "https://universal-academy.onrender.com/",
  };

  render() {
    return (
      <Layout>
        <div className="App">
          <div className="Meta">
            <h1>Universal Certificates</h1>
            <p>Please Enter your name</p>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ Name: e.target.value });
              }}
              value={this.state.Name}
              placeholder="Enter Name"
            ></input>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ Course: e.target.value });
              }}
              value={this.state.Course}
              placeholder="Enter Course"
            ></input>
            <button
              onClick={(e) => {
                e.preventDefault();
                saveAsPng(document.querySelector("#certificateWrapper"));
              }}
              className="btn btn-primary"
            >
              Download
            </button>
          </div>
          <div id="certificateWrapper" ref={this.certificateWrapper}>
            <p>{this.state.Name}</p>
            <span>{this.state.Course}</span>
            <div className="QRCode">
              <QRCode link={this.state.QrLink} />
            </div>
            <img
              className="certificateTamplate"
              width={1100}
              height={650}
              src={CertificateTamplet}
              alt="Certificate Tamplet"
            ></img>
          </div>
        </div>
      </Layout>
    );
  }
}

export default createCertificate;
