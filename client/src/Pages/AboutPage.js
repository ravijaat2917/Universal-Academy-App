import React from "react";
import LAYOUT from "../Components/Layout";
import { Form, Input, message } from "antd";
import axios from "axios";

import "../Styles/AboutUSPageStyles.css";

const AboutPage = () => {
  const onFinishHandler = async (value) => {
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
    <LAYOUT>
      <div className="aboutUsFormPart">
        <div>
          <div
            className="formStyle"
            style={{ backgroundColor: "rgb(193, 215, 208)" }}
          >
            <h4
              style={{
                fontWeight: "700",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              Lets Connect With Us Today
            </h4>
            <Form
              style={{ display: "flex", flexWrap: "wrap" }}
              layout="horizontal"
              onFinish={onFinishHandler}
            >
              <Form.Item label="Name" name={"name"}>
                <Input type="text" required></Input>
              </Form.Item>
              <Form.Item label="Email" name={"email"}>
                <Input type="email" placeholder="Optional"></Input>
              </Form.Item>
              <Form.Item label="Contact Number" name={"phone"}>
                <Input type="text" required></Input>
              </Form.Item>
              <Form.Item label="Message" name={"message"}>
                <Input type="text" required></Input>
              </Form.Item>
              <button className="btn btn-primary mb-3" type="submit">
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>
      <div>
        <h3
          style={{
            color: "rgb(3,88,161)",
            textAlign: "center",
            margin: "20px",
          }}
        >
          About Universal Academy
        </h3>
        <div>
          <p className="aboutAcademy">
            Universal Academy is located in Dharuhera, Haryana offers a
            top-quality learning experience within the areas of IT training.
            Universal Academy is that specialized in providing advanced training
            and certifications in complex Software and networking technologies.
            <br />
            Universal Academy may be a world-class training institution focused
            on the newest project base Software and advanced Networking
            Technologies.
            <br /> Only the proper people can train on the proper topologies in
            technology, and that we have industry-leading experts who provide
            training and support.
            <br /> Universal Academy team consists of highly qualified experts
            whom you’ll trust. Industry skill and knowledge can provide hands-on
            experience of performing on actual network infrastructure. we offer
            each student a singular learning experience of performing on the
            proper topologies with industry skills training & world experience.
            Our focus is on providing advanced training and certifications in
            complex networking technologies.
          </p>
        </div>
      </div>
      <div className="pb-3">
        <h3
          style={{
            color: "rgb(3,88,161)",
            textAlign: "center",
            margin: "20px",
          }}
        >
          Universal Academy provides training as Follows :
        </h3>
        <div>
          <p className="aboutAcademy">
            With certified professionals having excellent experience and skills.
            Universal Academy also can customize and structure the course which
            best fit your need as we believe that the right mixture of
            expertise.
            <br />
            Training skills are the master key to providing excellent training
            to the students who all are part of Universal Academy as well as
            wanted to be a part of Universal Academy.
          </p>
        </div>
      </div>
    </LAYOUT>
  );
};

export default AboutPage;
