import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../../Styles/AdminInquiryPage.css";
import { Modal } from "antd";

const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const [readListID, setReadListID] = useState("");
  const [listChanged, setListChanged] = useState("");

  const navigate = useNavigate();
  const [readList, setReadList] = useState([]);
  const [unreadList, setUnreadList] = useState([]);

  const getreadlists = async () => {
    try {
      const res = await axios.get("/api/v1/get/read/inquiries");
      //   console.log(res.data.data);
      setUnreadList(res.data.data);
    } catch (error) {
      console.log(error);
      message.error("Error in Getting Lists");
    }
  };
  const getUnreadlists = async () => {
    try {
      const res = await axios.get("/api/v1/get/unread/inquiries");
      setReadList(res.data.data);
    } catch (error) {
      console.log(error);
      message.error("Error in Getting Lists");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setListChanged(generateString(4));
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    getreadlists();
  }, [listChanged]);
  useEffect(() => {
    getUnreadlists();
  }, [listChanged]);

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

  const handleMarkAllRead = async () => {
    setListChanged(generateString(4));
    try {
      const res = await axios.put("/api/v1/mark/all/read");
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error("Error in Updating");
      }
    } catch (error) {
      console.log(error);
      message.error("Error in Updating");
    }
  };
  const handleDeleteAllRead = async () => {
    setListChanged(generateString(4));
    try {
      const res = await axios.delete("/api/v1/delete/all/read");
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error("Error in Updating");
      }
    } catch (error) {
      console.log(error);
      message.error("Error in Updating");
    }
  };

  const handleDeleteById = async () => {
    const res = await axios.delete(`/api/v1/delete/unread/${readListID}`);
    if (res.data.success) {
      message.success(res.data.message);
      setListChanged(generateString(4));
    }
  };

  const handleUpdateById = async () => {
    const res = await axios.put(`/api/v1/mark/read/${readListID}`);
    if (res.data.success) {
      message.success(res.data.message);
      setListChanged(generateString(4));
    }
  };
  return (
    <>
      <Tabs>
        <Tabs.TabPane tab="...Unread..." key={0}>
          <div className="d-flex justify-content-end">
            <h6
              className="p-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={handleMarkAllRead}
            >
              {readList.length ? "Mark All Read" : "No Notifications"}
            </h6>
          </div>

          <div className="">
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
                  <span style={{ width: "100px" }}>Contact</span>
                  <span
                    style={{
                      width: "300px",
                      height: "25px",
                      textOverflow: "hidden",
                      overflowY: "hidden",
                    }}
                  >
                    Course
                  </span>
                </li>
              </div>
            </div>
          </div>
          {readList.map((notificationMgs) => (
            <div className="">
              <div className="card" style={{ cursor: "pointer" }}>
                <div
                  className="card-text "
                  onClick={() => navigate(notificationMgs.onClickPath)}
                >
                  <li
                    className="inquirylists1"
                    style={{ padding: "5px 0px", cursor: "pointer" }}
                    onClick={() => {
                      setModal2Open(true);
                      setReadListID(notificationMgs._id);
                    }}
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
                      {notificationMgs.name}
                    </span>
                    <span style={{ width: "100px" }}>
                      {notificationMgs.phone}
                    </span>
                    <span
                      style={{
                        width: "300px",
                        maxHeight: "50px",
                        textOverflow: "ellipsis",
                        overflowY: "hidden",
                      }}
                    >
                      {notificationMgs.message}
                    </span>
                  </li>
                </div>
              </div>
            </div>
          ))}

          <Modal
            title="Take An Action"
            centered
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            footer=<div style={{ margin: "30px 0px 10px" }}>
              <button
                onClick={() => {
                  setModal2Open(false);
                  handleDeleteById();
                }}
                className="btn btn-danger m-2"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setModal2Open(false);
                  handleUpdateById();
                }}
                className="btn btn-primary m-2"
              >
                Mark Read
              </button>
            </div>
          ></Modal>
        </Tabs.TabPane>
        <Tabs.TabPane tab="...Read..." key={1}>
          <div className="d-flex justify-content-end">
            <h6
              className="p-2 text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setModal3Open(true);
              }}
            >
              {unreadList.length ? "Delete All Read" : "No Notifications"}
            </h6>
            <Modal
              title="This Action cannot be undone..."
              centered
              open={modal3Open}
              onOk={() => () => {
                setModal3Open(false);
                handleDeleteAllRead();
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
                    handleDeleteAllRead();
                  }}
                  className="btn btn-danger m-2"
                >
                  Delete
                </button>
              </div>
            ></Modal>
          </div>

          <div className="">
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
                  <span style={{ width: "100px" }}>Contact</span>
                  <span
                    style={{
                      width: "300px",
                      height: "25px",
                      textOverflow: "hidden",
                      overflowY: "hidden",
                    }}
                  >
                    Course
                  </span>
                </li>
              </div>
            </div>
          </div>
          {unreadList.map((notificationMgs) => (
            <div className="">
              <div className="card" style={{ cursor: "pointer" }}>
                <div
                  className="card-text "
                  onClick={() => navigate(notificationMgs.onClickPath)}
                >
                  <li
                    className="inquirylists1"
                    style={{ padding: "5px 0px", cursor: "pointer" }}
                    onClick={() => {
                      setModal1Open(true);
                      setReadListID(notificationMgs._id);
                    }}
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
                      {notificationMgs.name}
                    </span>
                    <span style={{ width: "100px" }}>
                      {notificationMgs.phone}
                    </span>
                    <span
                      style={{
                        width: "300px",
                        maxHeight: "50px",
                        textOverflow: "ellipsis",
                        overflowY: "hidden",
                      }}
                    >
                      {notificationMgs.message}
                    </span>
                  </li>
                </div>
              </div>
            </div>
          ))}

          <Modal
            title="Take An Action"
            centered
            open={modal1Open}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
            footer=<div style={{ margin: "30px 0px 10px" }}>
              <button
                onClick={() => {
                  setModal1Open(false);
                }}
                className="btn btn-secondary m-2"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setModal1Open(false);
                  handleDeleteById();
                }}
                className="btn btn-danger m-2"
              >
                Delete
              </button>
            </div>
          ></Modal>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default App;
