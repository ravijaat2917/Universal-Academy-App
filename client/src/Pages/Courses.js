import React from "react";
import LAYOUT from "../Components/Layout";
import { Input, Form, Tabs , message } from "antd";
import axios from 'axios';
import "../Styles/CoursesPage.css";
import {
  courses,
  jobOrientedCourses,
  spokenEnglish,
} from "../data/CoursesData.js";

const Courses = () => {

  const onFinishHandler = async (value) => {
    // console.log(value);
    try {
      const res = await axios.post("api/v1/new-inquiry", value);
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(" "+res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <LAYOUT>
      <div className="d-flex courses-styles">
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
              <Form
                layout="vertical"
                onFinish={onFinishHandler}
              >
                <Form.Item label="Name" name={"name"}>
                  <Input type="text" required></Input>
                </Form.Item>
                <Form.Item label="Email" name={"email"}>
                  <Input type="email" required></Input>
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

        <div>
          <Tabs
            style={{
              display: "flex",
              //   width: "100%",
              justifyContent: "space-around",
            }}
          >
            <Tabs.TabPane tab="-Courses-" key={0}>
              <div>
                <div className="courses-section">
                  <div className="d-flex single-course-section">
                    <div className="course-Image">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2bnPnCgLKufAMXvJvDJInU5CFMifqgdezwg&usqp=CAU"
                        alt={"Course Image"}
                      />
                      <img
                        src="https://www.ngogroups.in/productImage/Advanced_Excel_by_LEXICON-1024x576-20200214120040.jpg"
                        alt={"Course Image"}
                      />
                    </div>
                    <div className="course-details">
                      <p className="course-name">BCC + Advance Excel</p>
                      <div className="d-flex course-price">
                        <h6>Fees : </h6>
                        <p> &nbsp; 4500</p>
                      </div>
                      <div className="d-flex course-price">
                        <h6>Duration : </h6>
                        <p> &nbsp; 3 Months</p>
                      </div>
                    </div>
                  </div>
                  {courses.map((course) => {
                    return (
                      <div className="d-flex single-course-section">
                        <div>
                          <img src={course.img} alt={"Course Image"} />
                        </div>
                        <div className="course-details">
                          <p className="course-name">{course.name}</p>
                          <div className="d-flex course-price">
                            <div>
                              <h6>Fees : </h6>
                            </div>
                            <div>
                              <p> &nbsp; {course.fees}</p>
                            </div>
                          </div>
                          <div className="d-flex course-price">
                            <h6>Duration : </h6>
                            <p> &nbsp; {course.duration}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="-Job Oriented Courses-" key={1}>
              <div>
                <div className="courses-section">
                  {jobOrientedCourses.map((course) => {
                    return (
                      <div className="d-flex single-course-section">
                        <div>
                          <img src={course.img} alt={"Course Image"} />
                        </div>
                        <div className="course-details">
                          <p className="course-name">{course.name}</p>
                          <div className="d-flex course-price">
                            <h6>Fees : </h6>
                            <p> &nbsp; {course.fees}</p>
                          </div>
                          <div className="d-flex course-price">
                            <h6>Duration : </h6>
                            <p> &nbsp; {course.duration}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="-Spoken English Training-" key={2}>
              <div>
                <div className="courses-section mb-3">
                  {spokenEnglish.map((course) => {
                    return (
                      <div className="d-flex single-course-section">
                        <div>
                          <img src={course.img} alt={"Course Image"} />
                        </div>
                        <div className="course-details">
                          <p className="course-name">{course.name}</p>
                          <div className="d-flex course-price">
                            <h6>Fees : </h6>
                            <p> &nbsp; {course.fees}</p>
                          </div>
                          <div className="d-flex course-price">
                            <h6>Duration : </h6>
                            <p> &nbsp; {course.duration}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  NOTE : 1-Year Batch is Sure Shot Batch
                </div>
              </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="-LIBRARY-" key={3}>
              <div>
                <div className="courses-section mb-3">
                  <div className="d-flex single-course-section">
                    <div>
                      <img src="data:image/jpeg;base64,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"></img>
                    </div>
                    <div className="course-details">
                      <p className="course-name">Library Charges</p>
                      <div className="d-flex course-price">
                        <h6>Time / Day : </h6>
                        <p>&nbsp;5 Hours &nbsp; &nbsp;</p> <h6>&nbsp;Fees</h6>
                        <p>&nbsp;800</p>
                      </div>
                      <div className="d-flex course-price">
                        <h6>Time / Day : </h6>
                        <p>&nbsp;10 Hours &nbsp;</p> <h6>&nbsp;Fees</h6>
                        <p>&nbsp;1000</p>
                      </div>
                      <div className="d-flex course-price">
                        <h6>Seat Fix </h6>
                        <p>&nbsp; &nbsp; &nbsp;</p> <h6>&nbsp;Fees</h6>
                        <p>&nbsp;1200</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </LAYOUT>
  );
};

export default Courses;
