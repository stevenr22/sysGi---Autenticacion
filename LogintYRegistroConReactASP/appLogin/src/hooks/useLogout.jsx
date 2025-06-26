import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function useLogout(){
    const navigate = useNavigate();
    const handleLogout = () => {
      Swal.fire({
        title: "Cerrar sesión",
        text: "¿Estás seguro de que quieres cerrar sesión?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, cerrar sesión",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear(); // Limpiar el localStorage
          toast.success("Sesión cerrada exitosamente");
          navigate("/"); // Redirigir al login
        }
      });
    };
    return { handleLogout };

}
export default useLogout;