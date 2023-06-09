import React from "react";
import Layout from "../Components/Layout.js";
import UALogo from "../ImagesAndLogos/ua-logo.png";
import "../Styles/LandingPageStyles.css";
import { Button, Form, Input } from "antd";

function LandingPages() {
  const MyFormItemContext = React.createContext([]);
  function toArr(str) {
    return Array.isArray(str) ? str : [str];
  }
  const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );
    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };
  const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  const onFinish = async(value) => {
    console.log(value);
  };

  return (
    <Layout>
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
            <button
              onMouseEnter={() => {
                console.log(`mouse Entered`);
              }}
            >
              Home
            </button>
            <button>Courses</button>
            <button>Diploma | Degree | PG</button>
            <button>Placement</button>
            <button>Library</button>
            <button>Contact Us</button>
          </nav>
        </div>
      </div>

      <div
        className="demo-part"
        style={{
          backgroundImage:
            'url("https://c1.wallpaperflare.com/preview/811/367/789/technology-computer-creative-design.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="demo-left">
          
            <p>Advance Certifications</p>
            <p>Certified Professional Diploma Courses</p>
            <p>UGC Entitled Online Programs(BBA, BCA, MCA ,MBA)</p>
          
        </div>
        <div className="demo-right">
          <div className="formStyle">
            <h4
              style={{
                fontWeight: "20px",
                paddingBottom: "20px",
                textAlign: "center",
              }}
            >
              Request For Demo Lecture
            </h4>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
              <MyFormItemGroup prefix={["user"]}>
                <MyFormItemGroup prefix={["name"]}>
                  <MyFormItem name="name" label="First Name" required>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="email" label="Email" required>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="phone" label="Contact Number" required>
                    <Input />
                  </MyFormItem>
                  <MyFormItem name="course" label="Course">
                    <Input />
                  </MyFormItem>
                </MyFormItemGroup>
              </MyFormItemGroup>

              <Button
                className="btn btn-primary"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPages;
