import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from "react-router-dom";
import Spinner from '../Spinner';

const ProtectedRoutes = async () => {
  const [token, setToken] = useState(`${localStorage.getItem('token')}`);
  const [ok, setOk] = useState();
  useEffect(async () => {
    const res = await axios.post('api/v1/verify/admin', { jwt: localStorage.getItem('token') });
    if (res.data.success) {
      setOk = true;
    }
  
  }, [token]);
  return ok ? <Outlet /> : <Spinner />;

}

export default ProtectedRoutes ;