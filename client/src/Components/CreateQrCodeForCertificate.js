import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateQrCodeForCertificate = (props) => {

    const [qr, setQr] = useState();

    const createQR = async (link) => {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=${link}`;
        setQr(url);

    }
    useEffect(() => {
        createQR(props.link);
    }, []);
    return (
        <img src={qr} />
  )
}

export default CreateQrCodeForCertificate
