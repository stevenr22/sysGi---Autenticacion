import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Dashboard from "../layouts/Dashboard"


function AppRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    );

}
export default AppRoutes;
