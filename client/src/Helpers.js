import { message } from "antd";
import axios from 'axios';

export const getCurrentDate = () => {
  var date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

export const getUserDetailsFunction = async (id) => {
  try {
    const res = await axios.get(`/api/v1/get/student/${id}`);
    if (res.data.success) {
      // setName(res.data.data.name);
      // setRegisteration(res.data.data.registration);
      return {
        Name: "Ravi Lour",
        Course: "Full Stack Development",
        QrLink: "https://universal-academy.onrender.com/",
        // issueDate: `${getCurrentDate()}`,
      }
    } else {
      message.error("Something Went Wrong");
    }
  } catch (error) {
    console.log(error);
  }
};
