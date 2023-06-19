import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";
import QueryList from "../../Components/QueryLists";

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
          <h3 className="text-center p-0">Queries For Inquiries</h3>
          <QueryList />
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

export default Dashboard;
