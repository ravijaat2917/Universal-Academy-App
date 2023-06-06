import React from "react";
import { Layout, Space } from "antd";
import Header1 from "./Header";
import Footer1 from "./Footer";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  height: 64,
  paddingInline: 50,
    lineHeight: "64px",
  backgroundColor:'white'
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
    backgroundColor:'white'
};
const footerStyle = {
  textAlign: "center",
    backgroundColor:'white'
};

const LAYOUT = ({children}) => {
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
          <Header style={headerStyle}><Header1/></Header>
                  <Content style={contentStyle}>{children}</Content>
          <Footer style={footerStyle}><Footer1/></Footer>
        </Layout>
      </Space>
    </>
  );
};

export default LAYOUT;
