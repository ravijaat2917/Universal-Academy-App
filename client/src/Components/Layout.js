import React from "react";
import { Layout, Space } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import UALogo from "../ImagesAndLogos/ua-logo.png";
import { useNavigate } from "react-router-dom";
import "../Styles/LandingPageStyles.css";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",

  backgroundColor: "white",
};

const LAYOUT = ({ children }) => {
  const navigate = useNavigate();
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
            <div className="smallScreenWidget">
              <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              <i class="fa-solid fa-bars"></i>
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
                <div className="navigation-buttons">
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
                </div>
                {localStorage.getItem("token") ? (
                  <div className="navigation-buttons">
                    <p
                      onClick={() => {
                        localStorage.clear();
                        navigate("/login");
                      }}
                    >
                      LogOut
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

                {localStorage.getItem("token") ? (
                  <div className="navigation-buttons">
                    <p
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </p>
                  </div>
                ) : (
                  ""
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
