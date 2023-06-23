import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";
import StudentListsComponent from "../../Components/StudentListsComponent";

const Dashboard = () => {
  const navigate = useNavigate();
  const [ok, setOk] = useState();
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

  return (
    <AdminLayout>
      {ok === true ? (
        <>
          <button
            onClick={() => navigate("/add/student")}
            className="btn btn-primary"
          >
            Add New Student
          </button>
          <div style={{ margin: "0px" }}>
            <StudentListsComponent />
          </div>
        </>
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
          <h2>
            <i class="fa-solid fa-spinner fa-spin-pulse"></i> Loading...
          </h2>
          {/* <div>
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
          </div> */}
        </div>
      )}
    </AdminLayout>
  );
};

export default Dashboard;
