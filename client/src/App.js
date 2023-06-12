import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPages from "./Pages/LandingPages";
import Courses from "./Pages/Courses";
import Profile from "./Pages/Student/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutPage from "./Pages/AboutPage";
import AdminLogin from "./Pages/Admin/AdminLogin";
import Dashboard from "./Pages/Admin/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  );
}

export default App;
