import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddNewStudentForm = () => {

  const navigate = useNavigate();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const res = await axios.post("/api/v1/add/new/student", {
        ...values,
      });
      if (res.data.success === true) {
        message.success(res.data.message);
        navigate('/students');
        
      } else {
        message.error(res.data.message);
      }
      // console.log("Received values of form: ", values);
    } catch (error) {
      message.error("Email Already Exists");
    }
  };

  return (
    <>
      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="card m-3 p-3" style={{ maxWidth: "500px" }}>
          <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item name={"registration"} label="Reg. Id ">
              <Input required type="text" placeholder="Enter Reg Id" />
            </Form.Item>
            <Form.Item name={"name"} label="Name ">
              <Input required type="text" placeholder="Enter Name" />
            </Form.Item>
            <Form.Item name={"guardian"} label="Guardian's Name ">
              <Input
                required
                type="text"
                placeholder="Enter Guardian's name"
              />
            </Form.Item>
            <Form.Item name={"email"} label="E-mail ">
              <Input required type="text" placeholder="Enter Email" />
            </Form.Item>
            <Form.Item name={"phone"} label="Contact No. ">
              <Input
                minLength={10}
                maxLength={10}
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
              <Select required placeholder="select your gender">
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name={"course"} label="Course ">
              <Input type="text" placeholder="Course" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Student
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center pt-2" style={{ fontSize: "12px" }}>
            {" "}
            <b>Note </b>: This is protected by a password, which is the first
            four digits of student's Name and last four digits of registered
            mobile number, for example if name is Aditya and phone No. is
            ******1290 then password will be Adit1290.
          </p>
        </div>
      </div>
    </>
  );
};

export default AddNewStudentForm;
