import React from "react";
import LAYOUT from "../Components/Layout";
import "../Styles/RegisterStyle.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/register", values);
      if (res.data.success) {
        message.success("Register Successfully");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  return (
    <LAYOUT>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register Form</h3>
          <Form.Item  label="Name" name={"name"}>
            <Input type="text" required></Input>
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <Input minLength={12} type="email" required></Input>
          </Form.Item>
          <Form.Item label="Contact Number" name={"phone"}>
            <Input minLength={10} maxLength={10} type="text" required></Input>
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input minLength={6} type="password" required></Input>
          </Form.Item>
          <button className="btn btn-primary mb-3" type="submit">
            Register
          </button>
          <Link to={"/login"} className="linkinform">
            Already User ? Login
          </Link>
        </Form>
      </div>
    </LAYOUT>
  );
};

export default Register;
