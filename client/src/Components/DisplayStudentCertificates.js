import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DisplayStudentCertificates = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [photo, setPhoto] = useState();
  const [certificates, setCertificates] = useState([]);

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
  const getImage = async () => {
    // try {
    //   const res = await axios.get(`/api/v1/certificate/image/${params.id}`);
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getAllCertificates();
  }, []);
  useEffect(() => {
    getImage();
  }, []);
  return (
    <>
      <hr className="mb-4" />
      <div >

      {certificates.map((c) => {
        return  <div>
          <Link style={{ margin: '30px', color: 'black', width: '100%', fontSize: '20px', fontWeight: '500', textAlign: 'center' }} to={`/verify/certificate/${c.certificateID}`}>
            <div className="d-flex m-3" style={{justifyContent:'space-around' ,width:'100%'}}><p>{c.course} Certificate</p>
          <button onClick={()=>{navigate(`/verify/certificate/${c.certificateID}`)}} className="btn btn-secondary " style={{margin:'0px 20px'}}>View </button></div><hr/></Link>
        </div>
        
      })}
      </div>
    </>
  );
};

export default DisplayStudentCertificates;
