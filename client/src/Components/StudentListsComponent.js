import React, { useEffect, useState } from "react";
import { message } from "antd";
import axios from "axios";
import "../Styles/AdminInquiryPage.css";
import { useNavigate } from "react-router-dom";

const StudentListsComponent = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const getAllStudents = async () => {
    try {
      const res = await axios.get("/api/v1/get/all/students");
      // console.log(res.data);
      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
      message.error("Error in Getting Students");
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <>
      <div className="p-0 mt-2">
        <div className="card" style={{ cursor: "pointer" }}>
          <div className="card-text ">
            <li className="inquirylists">
              <span
                style={{
                  display: "block",
                  lineHeight: "25px",
                  width: "300px",
                  height: "25px",
                  fontWeight: "500",
                  textOverflow: "hidden",
                  overflowY: "hidden",
                }}
              >
                Name
              </span>
              <span style={{ width: "300px" }}>Guardian</span>
              <span style={{ width: "100px" }}>Contact</span>
            </li>
          </div>
        </div>
        {students.map((student) => (
          <div className="">
            <div className="card">
              <div
                className="card-text "
                onClick={() => navigate(`/student/${student._id}`)}
              >
                <li
                  className="inquirylists1 "
                  style={{ padding: "5px 0px", cursor: "pointer" }}
                >
                  <span
                    style={{
                      display: "block",
                      lineHeight: "25px",
                      width: "300px",
                      maxHeight: "50px",
                      fontWeight: "500",
                      textOverflow: "hidden",
                      overflowY: "hidden",
                    }}
                  >
                    {student.name}
                  </span>

                  <span style={{ width: "300px" }}>{student.guardian}</span>
                  <span style={{ width: "100px" }}>{student.phone}</span>
                </li>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default StudentListsComponent;
