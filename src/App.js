import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Pages/Form";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>

      {/* <Login></Login> */}
      {/* <Form> </Form> */}
    </div>
  );
}
