import React, { useEffect, useState } from "react";
import { Layout, Space } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import UALogo from "../ImagesAndLogos/ua-logo.png";
import { useNavigate } from "react-router-dom";
import "../Styles/LandingPageStyles.css";
import axios from "axios";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",

  backgroundColor: "white",
};

const LAYOUT = ({ children }) => {
  const navigate = useNavigate();
  const [ok, setOk] = useState(false);
  const [verifiedStudent, setVerifiedStudent] = useState();
  const [userId, setUserId] = useState();



  const autUser = async () => {
    try {
      const res = await axios.post("api/v1/verify/admin", {
        jwt: localStorage.getItem("token"),
      });
      setUserId(res.data.userId);
      if (res.data.admin === true) {
        setOk(true);
      } else if(res.data.verifiedStudent === true){
        setVerifiedStudent(true);
      } else {
        setOk(res.data.admin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    autUser();
  }, [ok , verifiedStudent]);
  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
        size={[0, 48]}
      >
        <Layout>
          <div>
            <Header />
          </div>
          <div className="MainHeader">
            <div className="Header2">
              <img className="UaLogo" src={UALogo} alt="UA Logo" />
              <div>
                <h2>Universal Academy</h2>
              </div>
            </div>
            <div>
              <nav className="ButtonsSection">
                <div className="navigation-buttons">
                  <p
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </p>
                </div>
                {verifiedStudent === true ? (<p></p>) : (<><div className="navigation-buttons">
                  <p
                    onClick={() => {
                      navigate("/courses");
                    }}
                  >
                    Courses
                  </p>
                </div>
                <div className="navigation-buttons">
                  <p
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    About
                  </p>
                </div>  </>)}
                
                {localStorage.getItem("token") ? (
                  <div className="navigation-buttons">
                    {ok === true ? (
                      <p
                        onClick={() => {
                          navigate("/dashboard");
                        }}
                      >
                        Dashboard
                      </p>
                    ) : (
                      <p
                        onClick={() => {
                          navigate(`/profile/${userId}`);
                        }}
                      >
                        Profile
                      </p>
                    )}
                  </div>
                ) : (
                  ""
                )}

                {localStorage.getItem("token") ? (
                  <div className="navigation-buttons">
                    <p
                      onClick={() => {
                        localStorage.clear();
                        navigate("/login");
                      }}
                    >
                      Logout
                    </p>
                  </div>
                ) : (
                  <div className="navigation-buttons">
                    <p
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </p>
                  </div>
                )}
              </nav>
            </div>
          </div>
          <div>
            <Content style={contentStyle}>{children}</Content>
          </div>
          <div>
            <Footer />
          </div>
        </Layout>
      </Space>
    </>
  );
};

export default LAYOUT;
