import React, { Component } from "react";
import Layout from "../Components/AdminLayout";
import "../Styles/CreateCertificateStyles.css";
import CertificateHeaderContent from "./CertificateHeaderContent";

class createCertificate extends Component {
  render() {
    return (
      <Layout>
        <div className="App">
          <CertificateHeaderContent />
        </div>
      </Layout>
    );
  }
}

export default createCertificate;
