import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { message, Modal, Button } from "antd";

const DisplayStudentCertificates = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [certificates, setCertificates] = useState([]);
  const [listChanged, setListChanged] = useState("");
  const [modal3Open, setModal3Open] = useState(false);

  const deleteCertificate = async () => {
    try {
      const res = await axios.delete(`/api/v1/delete/student/${params.id}`);
      if (res.data.success) {
        message.success("Deleted Successfully");
        navigate("/students");
        setListChanged(generateString(4));
      } else {
        // message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Error in Deleting");
    }
  };

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
    getAllCertificates();
  }, [listChanged]);

  return (
    <>
      <hr className="mb-4" />
      <div>
        {certificates.map((c) => {
          return (
            <div>
              <Link
                style={{
                  margin: "30px",
                  color: "black",
                  width: "100%",
                  fontSize: "20px",
                  fontWeight: "500",
                  textAlign: "center",
                }}
                to={`/verify/certificate/${c.certificateID}`}
              >
                <div
                  className="d-flex m-3"
                  style={{ justifyContent: "space-around", width: "100%" }}
                >
                  <p className="m-2">{c.course} Certificate</p>
                  <div>
                    <div>
                      <button
                        onClick={() => {
                          navigate(`/verify/certificate/${c.certificateID}`);
                        }}
                        className="btn btn-secondary m-2"
                        style={{ margin: "0px 20px" }}
                      >
                        View{" "}
                      </button>
                      {/* 
                      <button
                        onClick={() => {
                          setModal3Open(true);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button> */}
                    </div>
                  </div>
                </div>
                <hr />
              </Link>
            </div>
          );
        })}
        <Modal
          title="This Action cannot be reverse..."
          centered
          open={modal3Open}
          onOk={() => () => {
            setModal3Open(false);
            deleteCertificate();
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
                deleteCertificate();
              }}
              className="btn btn-danger m-2"
            >
              Delete
            </button>
          </div>
        ></Modal>
      </div>
    </>
  );
};

export default DisplayStudentCertificates;
