import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Panel Principal .::. sysGi";
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      toast.warn("Por favor, inicia sesión primero.");
      navigate("/");
     
    }
  }, [navigate]);
}

export default useAuth;
