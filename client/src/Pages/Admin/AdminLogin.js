import React from "react";
import LAYOUT from "./../../Components/Layout";
import { Form, Input, message } from "antd";
import "../../Styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const onFinishHandler = async (value) => {
    try {
      const res = await axios.post("/api/v1/login", value);
      if (res.data.isAdmin === true) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
        message.success(res.data.message);
      } else {
        message.error("Not Admin Please Login on Student Portal");
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
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
          <h3 className="text-center">Admin Login</h3>
          <Form.Item label="Email" name={"email"}>
            <Input type="email" required></Input>
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input type="password" required></Input>
          </Form.Item>
          <button className="btn btn-primary mb-3" type="submit">
            Login
          </button>

          <Link to={"/login"} className=" linkinform">
            Student Login
          </Link>
        </Form>
      </div>
    </LAYOUT>
  );
};

export default Login;
