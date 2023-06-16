import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QRCodeGenerate = () => {
    const [qr, setQr] = useState();
    const createQR = async (link) => {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${link}`;
        setQr(url);

    }

    useEffect(() => {
        createQR('https://universal-academy.onrender.com/')
    }, []);
  return (
      <div>
          <img src={qr} />
          <a style={{ fontSize: '20px', color: 'black' }} href={qr} download="proposed_file_name">Download</a>
    </div>
  )
}

export default QRCodeGenerate
