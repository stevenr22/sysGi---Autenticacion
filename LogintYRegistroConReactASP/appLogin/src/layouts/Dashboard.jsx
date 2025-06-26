import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import useLogout from "../hooks/useLogout";
function Dashboard() {
  //LLAMAR AL HOOK useAuth
  useAuth();

  //LAMAR HOOK useUser
  const { nombre, apellido } = useUser();

  //LLAMAR HOOK useLogout
  const { handleLogout } = useLogout();
  

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* NAVBAR COMPLETO */}
      <Navbar handleLogout={handleLogout} />

      {/* CONTENIDO DEL CUERPO */}
      <Main nombre={nombre} apellido={apellido} />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Dashboard;
