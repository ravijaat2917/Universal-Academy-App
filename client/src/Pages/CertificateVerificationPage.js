import React, { useEffect, useState } from "react";
import verifiedLogo from "../ImagesAndLogos/verifiedLogo.png";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const CertificateVerificationPage = () => {
  const params = useParams();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [course, setCourse] = useState();
  const [guardian, setGuardian] = useState();
  const [gender, setGender] = useState();
  const [registeration, setRegisteration] = useState();
  const [password, setPassword] = useState();

  const [studentID, setStudentID] = useState();

  const getStudentDetails = async () => {
    try {
      const res = await axios.get(
        `/api/v1/student/by/certificate/${params.id}`
      );
      if (res.data.success) {
        setName(res.data.student.name);
        setEmail(res.data.student.email);
        setGender(res.data.student.gender);
        setGuardian(res.data.student.guardian);
        setRegisteration(res.data.student.registration);
      } else {
        message.error("Something Went Wrong");
      }
    } catch (error) {
      console.log(error);
      // message.error("Error in getting Student Details");
    }
  };

  useEffect(() => {
    getStudentDetails();
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "grey" }}>
        <div
          className="d-flex pt-4 "
          style={{
            margin: "20px",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img height={"40px"} src={verifiedLogo} />{" "}
          <p
            style={{
              fontWeight: "500",
              color: "white",
              fontSize: "25px",
              paddingLeft: "10px",
            }}
          >
            Verified
          </p>
        </div>

        <div>
          <div
            className=" formfontAdjuct"
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
              {/* <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
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
                  </span> */}
              {/* <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
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
                  </span> */}
              {/* <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
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
                  </span> */}
              {/* <span style={{ fontSize: "18px", fontFamily: "monospace" }}>
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
                  </span> */}
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <img
            className="m-5"
            width={"100%"}
            style={{ maxWidth: "800px" }}
            src={`/api/v1/certificate/image/${params.id}`}
            alt="certificate image"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CertificateVerificationPage;
