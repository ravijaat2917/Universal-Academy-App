import React from "react";
import { Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const { Header, Content } = Layout;

const App = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header>
        <div className="adminHeader">
          <div className="adminHeader-name">Universal Academy</div>
          <div className="d-flex adminHeaderButtons">
            <p
              onClick={() => {
                navigate("/dashboard");
              }}
              className="manageButtons"
            >
              Manage Inquiries
            </p>
            <p
              onClick={() => {
                navigate("/students");
              }}
              className="manageButtons"
            >
              Manage Students
            </p>
            <p
              onClick={() => {
                localStorage.clear();
                navigate("/admin-login");
              }}
              className="manageButtons"
            >
              Logout
            </p>
          </div>
        </div>
      </Header>
      <Content
        style={{
          padding: "10px 10px",
        }}
      >
        <div
          className="contentStyles"
          style={{
            padding: 0,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};
export default App;
