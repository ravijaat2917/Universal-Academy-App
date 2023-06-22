import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { message, Modal } from "antd";

const DisplayStudentCertificates = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [certificates, setCertificates] = useState([]);
  const [listChanged, setListChanged] = useState("");
  const [modal3Open, setModal3Open] = useState(false);

  const [selected, setSelected] = useState();

  const deleteCertificate = async () => {
    try {
      const res = await axios.delete(`/api/v1/delete/certificate/${selected}`);
      if (res.data.success === true) {
        message.success("Deleted Successfully");
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
                      
                      <button
                        onClick={() => {
                          setModal3Open(true);
                          setSelected(c._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
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
