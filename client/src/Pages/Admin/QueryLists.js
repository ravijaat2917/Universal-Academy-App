import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../../Styles/AdminInquiryPage.css";
import { Modal } from "antd";

const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [readListID, setReadListID] = useState("");

  const navigate = useNavigate();
  const onChange = (key) => {
    console.log(key);
  };
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
    getreadlists();
    getUnreadlists();
  }, [readList, unreadList]);

  const handleMarkAllRead = () => {};
  const handleDeleteAllRead = () => {};

  const handleDeleteById = async () => {
    const res = await axios.delete(`/api/v1/delete/unread/${readListID}`);
    if (res.data.success) {
      message.success(res.data.message);
    }
  };

  const handleUpdateById = async () => {
    const res = await axios.put(`/api/v1/mark/read/${readListID}`);
    if (res.data.success) {
      message.success(res.data.message);
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
              onClick={handleMarkAllRead}
            >
              {unreadList.length ? "Mark All Read" : "No Notifications"}
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
