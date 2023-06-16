import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, message, Modal } from "antd";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";

const { Option } = Select;

const Dashboard = () => {
  const [form] = Form.useForm();
  const params = useParams();
  const [modal3Open, setModal3Open] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [course, setCourse] = useState();
  const [guardian, setGuardian] = useState();
  const [gender, setGender] = useState();

  const onFinish = async (values) => {
    try {
      const res = await axios.post("/api/v1/add/new/student", {
        ...values,
      });
      if (res.data.success === true) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
      // console.log("Received values of form: ", values);
    } catch (error) {
      message.error("Email Already Exists");
    }
  };

  const getStudentDetails = async () => {
    try {
      const res = await axios.get(`/api/v1/get/student/${params.id}`);
      if (res.data.success) {
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setGender(res.data.data.gender);
        setPhone(res.data.data.phone);
        setGuardian(res.data.data.guardian);
        setCourse(res.data.data.course);
      } else {
        message.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      message.error("Error in getting Student Details");
    }
  };

  const deleteStudent = async () => {
    try {
      const res = await axios.delete(`/api/v1/delete/student/${params.id}`);
      if (res.data.success) {
        message.success("Deleted Successfully");
        navigate("/students");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Error in Deleting");
    }
  };

  const navigate = useNavigate();
  const [ok, setOk] = useState();
  const [profile, setProfile] = useState("profile");

  const autUser = async () => {
    try {
      const res = await axios.post("/api/v1/verify/admin", {
        jwt: localStorage.getItem("token"),
      });
      setOk(res.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);
  useEffect(() => {
    autUser();
  }, [ok]);

  return (
    <AdminLayout>
      {ok === true ? (
        <>
          <button
            onClick={() => setProfile("profile")}
            className="btn btn-info m-2"
          >
            Profile
          </button>
          <button
            onClick={() => setProfile("updateStudent")}
            className="btn btn-warning m-2"
          >
            Update
          </button>
          {profile === "profile" ? (
            <div id="UpdateStudentContent">
              <h3 className="text-center p-0">Student Profile</h3>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div
                  className="card m-3 p-3"
                  style={{ minWidth: "450px", maxWidth: "500px" }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "monospace",
                      marginBottom: "15px",
                    }}
                  >
                    <b>Name </b>: {name}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <b>Guardian' Name </b>: {guardian}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <b>Email </b>: {email}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <b>Contact No. </b>: {phone}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <b>Gender </b>: {gender}
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <b>Course </b>: {course}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div id="UpdateStudentContent">
              <h3 className="text-center p-0">Update Student Details</h3>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="card m-3 p-3" style={{ maxWidth: "500px" }}>
                  <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item name={"name"} label="Name ">
                      <Input
                        defaultValue={name}
                        required
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Form.Item>
                    <Form.Item name={"guardian"} label="Guardian's Name ">
                      <Input
                        defaultValue={guardian}
                        required
                        type="text"
                        placeholder="Enter your Guardian's name"
                      />
                    </Form.Item>
                    <Form.Item name={"email"} label="E-mail ">
                      <Input
                        defaultValue={email}
                        required
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Form.Item>
                    <Form.Item name={"phone"} label="Contact No. ">
                      <Input
                        defaultValue={phone}
                        required
                        type="phone"
                        placeholder="Enter your name"
                      />
                    </Form.Item>
                    <Form.Item
                      name="gender"
                      label="Gender"
                      rules={[
                        {
                          message: "Please select gender!",
                        },
                      ]}
                    >
                      <Select
                        defaultValue={gender}
                        required
                        placeholder="select your gender"
                      >
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name={"course"} label="Course ">
                      <Input
                        defaultValue={course}
                        type="text"
                        placeholder="Course"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Update
                      </Button>
                      <Button
                        onClick={() => {
                          setModal3Open(true);
                        }}
                        className="btn btn-secondary"
                      >
                        Delete
                      </Button>
                    </Form.Item>
                  </Form>
                  <Modal
                    title="This Action cannot be undone..."
                    centered
                    open={modal3Open}
                    onOk={() => () => {
                      setModal3Open(false);
                      deleteStudent();
                    }}
                    onCancel={() => setModal3Open(false)}
                    footer=<div style={{ margin: "30px 0px 10px" }}>
                      <button
                        onClick={() => {
                          setModal3Open(false);
                        }}
                        className="btn btn-secondary m-2"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          setModal3Open(false);
                          deleteStudent();
                        }}
                        className="btn btn-danger m-2"
                      >
                        Delete
                      </button>
                    </div>
                  ></Modal>
                  <p className="text-center pt-2" style={{ fontSize: "12px" }}>
                    {" "}
                    <b>Note </b>: This is protected by a password, which is the
                    first four digits of student's Name and last four digits of
                    registered mobile number, for example if name is Aditya and
                    phone No. is ******1290 then password will be Adit1290.
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div
          className="text-center"
          style={{
            height: "35vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <p style={{ fontSize: "32px", fontWeight: "500" }}>
              Session Time Out Please Login Again
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/admin-login");
              }}
              className="btn btn-primary"
              style={{ width: "350px", margin: "50px" }}
            >
              Login Now
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
