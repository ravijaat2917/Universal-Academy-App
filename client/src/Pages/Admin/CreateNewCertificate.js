import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { saveAsPng } from "save-html-as-image";
import { getCurrentDate } from "../../Helpers";
import QRCode from "../../Components/CreateQrCodeForCertificate";
import CertificateTamplet from "../../ImagesAndLogos/certificateTamplet.png";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";
import "../../Styles/CreateCertificateStyles.css";

const CertificateHeaderContent = () => {
  const navigate = useNavigate();
  const params = useParams();
  const certificateWrapper = React.createRef();
  const [ok, setOk] = useState();
  const [name, setName] = useState();
  const [course, setCourse] = useState();
  const [issueDate, setIssueDate] = useState(getCurrentDate());
  const [QrLink, setQrLink] = useState();
  const [verificationLink, setVerificationLink] = useState();
  const [certificateID, setCertificateID] = useState();

  const genUID = () => {
    return Date.now().toString();
  };

  const setVerificationLinkandUid = () => {
    const CI = genUID();
    setCertificateID(CI);
    const link =
      "https://universal-academy.onrender.com/verify/certificate/" + CI;
    setVerificationLink(link);
    setQrLink(link);
  };

  const [uid, setUid] = useState();

  const [photo, setPhoto] = useState("");

  const autUser = async () => {
    try {
      const res = await axios.post("/api/v1/verify/admin", {
        jwt: localStorage.getItem("token"),
      });
      setOk(res.data.admin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    autUser();
  }, [ok]);

  const getUserDetailsForCertificate = async () => {
    try {
      const res = await axios.get(`/api/v1/certificate/details/${params.id}`);
      if (res.data.success) {
        setName(res.data.data.name);
        setCourse(res.data.data.course);
        setUid(res.data.data.uid);
      }
    } catch (error) {
      console.log(error);
      // message.error("Error in Getting Details");
    }
  };
  const handleUploadCertificate = async (e) => {
    try {
      const productData = new FormData();
      // const verificationLink = `http://localhost:3000/verify/certificate/${genUID()}`;

      const student = params.id;
      productData.append("photo", photo);
      productData.append("student", student);
      productData.append("verificationLink", verificationLink);
      productData.append("certificateID", certificateID);
      productData.append("course", course);

      const res = await axios.post(
        "/api/v1/upload/student/certificate",
        productData
      );
      if (res.data.success === true) {
        message.success("Upload Successfully");
      }
    } catch (error) {
      console.log(error);
      message.error("Error in Uploading");
    }
  };
  useEffect(() => {
    getUserDetailsForCertificate();
  }, []);
  useEffect(() => {
    setVerificationLinkandUid();
  }, []);

  return (
    <AdminLayout>
      {ok === true ? (
        <div className="App">
          <Link
            className="m-3"
            style={{ width: "fit-content" }}
            to={`/certificates/${params.id}`}
          >
            <button
              className="btn"
              style={{ border: "1px solid black", width: "fit-content" }}
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </Link>
          <div className="Meta">
            <h1 style={{ color: "#274972" }}>Universal Certificates</h1>
            <div className="d-flex">
              <input
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                placeholder="Enter Name"
              ></input>
              <input
                type="text"
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
                value={course}
                placeholder="Enter Course"
              ></input>
              <input
                type="text"
                defaultValue={Date.now().toString()}
                onChange={(e) => {
                  setIssueDate(e.target.value);
                }}
                value={issueDate}
                placeholder={issueDate}
              ></input>
            </div>
            <div
              className=" d-flex"
              style={{
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  saveAsPng(document.querySelector("#certificateWrapper"));
                }}
                className="btn btn-primary m-3"
              >
                Download
              </button>
              <label
                style={{
                  border: "2px solid black",
                  boxShadow: "0 0 2px black",
                  borderRadius: "5px",
                }}
                className="btn btn-outline-secondary "
              >
                Upload to Database
                <input
                  required
                  style={{ border: "none" }}
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  //   hidden
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleUploadCertificate();
                  }}
                  className="btn btn-secondary"
                >
                  Upload
                </button>
              </label>
            </div>
          </div>
          <div id="certificateWrapper" ref={certificateWrapper}>
            <p>{name}</p>
            <div className="issueDate">
              <p style={{ fontSize: "21px" }}>{issueDate}</p>
            </div>
            <span>{course}</span>
            <div className="QRCode">
              <QRCode link={QrLink} />
            </div>
            <img
              className="certificateTamplate"
              width={1100}
              height={650}
              src={CertificateTamplet}
              alt="Certificate Tamplet"
            ></img>
          </div>
        </div>
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
              You Are Not Admin
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="btn btn-primary"
              style={{ width: "350px", margin: "50px" }}
            >
              Back To Home Page
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default CertificateHeaderContent;
