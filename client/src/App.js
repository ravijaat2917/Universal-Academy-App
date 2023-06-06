import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Student/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
