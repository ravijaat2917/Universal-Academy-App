import React from "react";
import Layout from "../Components/Layout.js";
import Image from "./../ImagesAndLogos/LandingPageImage1.png";
import "../Styles/LandingPageStyles.css";
import "../Styles/RegisterStyle.css";

import ADCA from "../ImagesAndLogos/ADCA.jpg";
import BCC from "../ImagesAndLogos/BCC.webp";
import C from "../ImagesAndLogos/c++.jpg";
import CyberSecurity from "../ImagesAndLogos/cybersecurityImage.jpeg";
import EthicalHacking from "../ImagesAndLogos/EthicalHacking.webp";
import Excell from "../ImagesAndLogos/ExcelImage.webp";
import DotNet from "../ImagesAndLogos/NetImage.png";
import Python from "../ImagesAndLogos/PythonImage.jpg";
import Sap from "../ImagesAndLogos/SapImage.jpg";
import Tally from "../ImagesAndLogos/TallyImage.png";
import axios from "axios";

import { Form, Input, message } from "antd";

function LandingPages() {
  const onFinishHandler = async (value) => {
    // console.log(value);
    try {
      const res = await axios.post("/api/v1/new-inquiry", value);
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(" " + res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="contentStyle">
        <div
          className="demo-part"
          style={{
            backgroundImage:
              'url("https://c1.wallpaperflare.com/preview/811/367/789/technology-computer-creative-design.jpg")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="demo-left">
            <p>Advance Certifications</p>
            <p>Certified Professional Diploma Courses</p>
            <p>UGC Entitled Online Programs(BBA, BCA, MCA ,MBA)</p>
          </div>
          <div className="demo-right">
            <div className="formStyle">
              <h4
                style={{
                  fontWeight: "20px",
                  paddingBottom: "20px",
                  textAlign: "center",
                }}
              >
                Request For Demo Lecture
              </h4>
              <Form layout="vertical" onFinish={onFinishHandler}>
                <Form.Item label="Name" name={"name"}>
                  <Input type="text" required></Input>
                </Form.Item>
                <Form.Item label="Email" name={"email"}>
                  <Input type="email" required></Input>
                </Form.Item>
                <Form.Item label="Contact Number" name={"phone"}>
                  <Input minLength={10} maxLength={10} type="phone" required></Input>
                </Form.Item>
                <Form.Item label="Course" name={"message"}>
                  <Input type="text" required></Input>
                </Form.Item>
                <button className="btn btn-primary mb-3" type="submit">
                  Send
                </button>
              </Form>
            </div>
          </div>
        </div>
        <div className="About">
          <div className="Details">
            <p className="DetailsHeading">Welcome to Universal Academy </p>
            <p className="DetailsContent">
              Universal Academy located in Dharuhera offers a quality learning
              experience in the areas of IT training. <br />
              Universal Academy is focus on providing advanced training and
              certifications in
              <br /> complex Software and networking technologies.
            </p>
          </div>

          <div className="d-flex miniScreesn  justify-column">
            <div className="detauils">
              <i class=" details-icons fa-solid fa-bullseye"></i>
              <h5>Live projects</h5>
            </div>
            <div className="detauils">
              <i class=" details-icons fa-solid fa-chalkboard-user"></i>
              <h5>
                Corporate & Certified
                <br /> Trainer
              </h5>
            </div>
            <div className="detauils">
              <i class="details-icons fa-solid fa-trophy"></i>
              <h5>Placed in top MNC</h5>
            </div>
            <div className="detauils">
              <i class=" details-icons fa-solid fa-star-of-david"></i>
              <h5>
                Case Studies and Project
                <br /> Base Training
              </h5>
            </div>
          </div>
        </div>
        <div
          className="d-flex"
          style={{
            backgroundColor: "#F4F5F9",
            paddingBottom: "22px",
            paddingTop: "0px",
          }}
        >
          <div>
            <div>
              <p className="slogans">
                We Provide Best Professional
                <br /> Certification For IT Courses
              </p>
              <p className="slogan-content">
                Universal Academy offers training on Cisco Certification
                programs like CCNA, CCNP, CCIE (All Track), Juniper, Microsoft,
                Linux, Firewall, VMware, Industrial Automation, Automation-RPA,
                Telecomm Engineer, C, C++, Java, Android, Dot Net, Oracle,
                Hadoop, Web Programing, Web Design, Digital Marketing, DevOps.
                Universal Academy is first choice for Trainings on Cisco and Juniper
                IT certifications.
              </p>
              <h3>Rack Rental</h3>
              <p className="slogan-content2">
                Dedicate racks available to each student. No fake image or fake
                promises original rack setup and Universal Academy is here for
                making careers.
              </p>
              <p className="button">Read More</p>
            </div>
          </div>
          <div>
            <img className="demo-image1" src={Image} alt="ComputerImage" />
          </div>
        </div>
        <div>
          <div>
            <p
              className="text-center"
              style={{ fontSize: "32px", fontWeight: "700" }}
            >
              Courses We Provide
            </p>
          </div>
          <div className="d-flex course-names-images">
            <div className="course">
              <img className="course-image" src={ADCA} alt="CourseImage" />
              <p className="course-name">ADCA</p>
            </div>
            <div className="course">
              <img className="course-image" src={BCC} alt="CourseImage" />
              <p className="course-name">BCC</p>
            </div>
            <div className="course">
              <img className="course-image" src={C} alt="CourseImage" />
              <p className="course-name">C / C++</p>
            </div>
            <div className="course">
              <img
                className="course-image"
                src={CyberSecurity}
                alt="CourseImage"
              />
              <p className="course-name">Cyber Security</p>
            </div>
            <div className="course">
              <img
                className="course-image"
                src={EthicalHacking}
                alt="CourseImage"
              />
              <p className="course-name">Ethical Hacking</p>
            </div>
            <div />
          </div>
          <div
            className="d-flex course-names-images"
            style={{ padding: "0px", margin: "0px" }}
          >
            <div className="course">
              <img className="course-image" src={Excell} alt="CourseImage" />
              <p className="course-name">Advance Excel</p>
            </div>
            <div className="course">
              <img className="course-image" src={DotNet} alt="CourseImage" />
              <p className="course-name">.Net</p>
            </div>
            <div className="course">
              <img className="course-image" src={Python} alt="CourseImage" />
              <p className="course-name">Python</p>
            </div>
            <div className="course">
              <img className="course-image" src={Sap} alt="CourseImage" />
              <p className="course-name">Sap</p>
            </div>
            <div className="course">
              <img className="course-image" src={Tally} alt="CourseImage" />
              <p className="course-name">Tally Software</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPages;
