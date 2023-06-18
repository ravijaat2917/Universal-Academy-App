import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams , Link } from "react-router-dom";
import AdminLayout from "../../Components/AdminLayout";
import DisplayStudentCertificates from "../../Components/DisplayStudentCertificates";

const StudentsCertificates = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [ok, setOk] = useState();
  const autUser = async () => {
    try {
      const res = await axios.post("/api/v1/verify/admin", {
        jwt: localStorage.getItem("token"),
      });
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
          <Link  className="m-3" to={`/student/${params.id}`}><button className="btn" style={{border:'1px solid black'}}><i class="fa-solid fa-arrow-left"></i></button></Link>
          <button
            onClick={() => navigate(`/create/certificate/${params.id}`)}
            className="btn btn-primary"
          >
            Add Certificate
          </button>
          <h3 className="mt-4" style={{ margin: "40px", textAlign: "center", padding: "0px" }}>
            Student Certificates
          </h3>
          <DisplayStudentCertificates />
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

export default StudentsCertificates;
