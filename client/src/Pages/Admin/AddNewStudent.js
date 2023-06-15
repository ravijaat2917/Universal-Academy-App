import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";
import AddNewStudentForm from "../../Components/AddNewStudentForm";

const AddNewStudent = () => {
  const navigate = useNavigate();
    const [ok, setOk] = useState(false);
    
  const autUser = async () => {
    try {
      const res = await axios.post("/api/v1/verify/admin", {
        jwt: localStorage.getItem("token"),
      });
        console.log(res.data.success);
      setOk(res.data.success);
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
                  <h4 className="text-center">Add New Student</h4>
        <div style={{margin:'0px'}}>
            <AddNewStudentForm/>
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
          <div>
            <p style={{ fontSize: "32px", fontWeight: "500" }}>
              Session Time Out Please Login Again
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                navigate("/admin-login");
              }}
              className="btn btn-primary"
              style={{ width: "350px", margin: "50px" }}
            >
              Login Now
            </button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AddNewStudent;
