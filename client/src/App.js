import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPages from "./Pages/LandingPages";
import Courses from "./Pages/Courses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPages />}></Route>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </>
  );
}

export default App;
