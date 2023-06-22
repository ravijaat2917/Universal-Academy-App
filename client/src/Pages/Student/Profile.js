import React, { useEffect, useState } from "react";
import LAYOUT from "../../Components/Layout";
import axios from "axios";
import { message } from "antd";
import { useParams } from "react-router-dom";
import verifiedLogo from "../../ImagesAndLogos/twitterVerifiedLogo.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  const [certificates, setCertificates] = useState([]);
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [course, setCourse] = useState();
  const [guardian, setGuardian] = useState();
  const [gender, setGender] = useState();
  const [registeration, setRegisteration] = useState();
  const [verifiedStudent, setVerifiedStudent] = useState();

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
        setVerifiedStudent(res.data.data.verified);
      } else {
        message.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      message.error("Error in getting Student Details");
    }
  };

  const getAllCertificates = async () => {
    try {
      const res = await axios.get(
        `/api/v1/get/student/certificates/${params.id}`
      );
      setCertificates(res.data.certificates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudentDetails();
    getAllCertificates();
  }, []);
  return (
    <LAYOUT>
      <div>
        <div id="UpdateStudentContent">
          {verifiedStudent === true ? (
            <h3 className="text-center">
              <img
                style={{ height: "32px", marginRight: "10px" }}
                src={verifiedLogo}
              ></img>
              <span style={{ paddingTop: "10px" }}> Verified</span>
            </h3>
          ) : (
            <h3 className="text-center p-0">Student Profile</h3>
          )}

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
      </div>
      <div>
        {/* <hr className="mb-4" /> */}
        <div>
          {certificates.length < 1 ? (
            ""
          ) : (
            <div>
              <h2
                className=""
                style={{
                  textAlign: "center",
                  backgroundColor: "#0074D9",
                  color: "white",
                  padding: "5px",
                }}
              >
                <span>Certificates</span>
              </h2>
              <hr />
              {certificates.map((c) => {
                return (
                  <div>
                      <div
                        className="d-flex m-3"
                        style={{
                          justifyContent: "space-around",
                          width: "100%",
                        }}
                      >
                        <p className="m-2">{c.course} Certificate</p>
                        <div className="d-flex">
                          <div>
                            <button
                              onClick={() => {
                                navigate(
                                  `/verify/certificate/${c.certificateID}`
                                );
                              }}
                            onclick="window.location.href='https://w3docs.com'"
                              className="btn btn-secondary m-2"
                              style={{ margin: "0px 20px" }}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </LAYOUT>
  );
};

export default Profile;
