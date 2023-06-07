import React from "react";
import { Layout, Space } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import "./../index.css";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  backgroundColor: "white",
};

const LAYOUT = ({ children }) => {
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
