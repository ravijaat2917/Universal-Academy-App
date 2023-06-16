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
  const [listChanged, setListChanged] = useState("");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [course, setCourse] = useState();
  const [guardian, setGuardian] = useState();
  const [gender, setGender] = useState();
  const [registeration, setRegisteration] = useState();
  const [password, setPassword] = useState();

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  const onFinish = async (values) => {
    try {
      const res = await axios.post(`/api/v1/update/student/${params.id}`, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        course: values.course,
        guardian: values.guardian,
        gender: values.gender,
        registration: registeration,
      });
      if (res.data.success === true) {
        message.success(res.data.message);
        setListChanged(generateString(4));
      } else {
        message.error(res.data.message);
      }
      // console.log("Received values of form: ", values);
    } catch (error) {
      message.error("Error in Updating");
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
        setRegisteration(res.data.data.registration);
        setPassword(res.data.data.password);
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
        setListChanged(generateString(4));
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
  }, [listChanged]);
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
                className="mt-3 formfontAdjuct"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="card m-3 p-3" style={{ minWidth: "350px" }}>
                  <span
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      fontFamily: "monospace",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Regn No. </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {registeration}
                      </p>
                    </div>
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      fontFamily: "monospace",
                      marginBottom: "15px",
                    }}
                  >
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Name </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {name}
                      </p>
                    </div>
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Guardian Name </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {guardian}
                      </p>
                    </div>
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Email </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {email}
                      </p>
                    </div>
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Contact No. </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {phone}
                      </p>
                    </div>
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Gender</b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {gender}
                      </p>
                    </div>
                  </span>
                  <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
                    <div
                      className="d-flex justifyTextCenter"
                      style={{
                        justifyContent: "space-between",
                        textAlign: "left",
                      }}
                    >
                      <p style={{ minWidth: "140px" }}>
                        <b>Course </b>
                      </p>
                      <p className="semicol">:</p>
                      <p className="mb-2" style={{ minWidth: "140px" }}>
                        {course}
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div id="UpdateStudentContent">
              <h3 className="text-center ">Update Student Details</h3>

              <div
                className="mt-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <div className="card mt-3 p-4" style={{ minWidth: "300px" ,maxWidth:'600px' ,width:'100%'}}>
                  <Form form={form} onFinish={onFinish} layout="vertical">
                    <Form.Item className="mt-3 " name={"name"} label="Name ">
                      <Input
                        defaultValue={name}
                        required
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Form.Item>
                    <Form.Item
                      className="mt-3"
                      name={"guardian"}
                      label="Guardian's Name "
                    >
                      <Input
                        defaultValue={guardian}
                        required
                        type="text"
                        placeholder="Enter your Guardian's name"
                      />
                    </Form.Item>
                    <Form.Item className="mt-3" name={"email"} label="E-mail ">
                      <Input
                        defaultValue={email}
                        required
                        type="text"
                        placeholder="Enter your name"
                      />
                    </Form.Item>
                    <Form.Item
                      className="mt-3"
                      name={"phone"}
                      label="Contact No. "
                    >
                      <Input
                        minLength={10}
                        maxLength={10}
                        defaultValue={phone}
                        required
                        type="phone"
                        placeholder="Enter Contact Number"
                      />
                    </Form.Item>
                    <Form.Item
                      className="mt-3"
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
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Other">Other</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      className="mt-3"
                      name={"password"}
                      label="Password "
                    >
                      <Input
                        defaultValue={password}
                        type="text"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item className="mt-3" name={"course"} label="Course ">
                      <Input
                        defaultValue={course}
                        type="text"
                        placeholder="Course"
                      />
                    </Form.Item>
                    <Form.Item className="mt-3">
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
