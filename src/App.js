import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Register from "./components/register";
import ChangePassword from "./components/changePassword";

function App() {
  return (
    <div className="containers">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
