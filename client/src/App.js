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
import StudentsPage from "./Pages/Admin/Students";
import AddNewStudent from "./Pages/Admin/AddNewStudent";
import CreateCertificate from "./Components/CreateCertificate";
import UpdateStudentDetails from "./Pages/Admin/UpdateStudentDetails";
import StudentsCertificates from "./Pages/Admin/StudentsCertificates";

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/add/student" element={<AddNewStudent />} />
        <Route path="/student/:id" element={<UpdateStudentDetails />} />
        <Route path="/create/certificate/:id" element={<CreateCertificate />} />
        <Route path="/certificates/:id" element={<StudentsCertificates/>}/>
        
      </Routes>
    </>
  );
}

export default App;
