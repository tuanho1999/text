
import Login from "./components/login";
import { Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Register from "./components/register";


function App() {
  return (
    
    <div className="body-app" >
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
