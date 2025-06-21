import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../services/Services";

function Login() {
  const [user, SetUser] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();
  // // Redirigir al usuario a la página de inicio si ya está autenticado
  
  


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!user || !password) {
      toast.warn("Por favor, completa todos los campos.");
      return;
    }


    // Aquí podrías agregar la lógica de autenticación
    try{
      const data = await loginUser(user, password); //envio de datos a la API
      toast.success("Inicio de sesión exitoso");
      
      //PUEDES GUARDAR LOS DATOS DEL USUARIO SI LOS DEVUELVE EL BACKEND
      localStorage.setItem("user", JSON.stringify(data)); //almacenamos los datos del usuario en el localStorage
      navigate("/dashboard"); //redireccionamos al usuario a la página de inicio
      
    } catch (error) {
      toast.error("Error al iniciar sesión: " + error.message);
     
    }


  };

  useEffect(() => {
    document.title = "Login .::. sysGi";
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div
          className="card shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="card-header bg-success text-white text-center">
            <h2 className="mb-0">Login</h2>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label">
                  Usuario
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="usuario"
                    placeholder="Ingrese su usuario"
                    onChange={(e) => SetUser(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">
                  Contraseña
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    placeholder="Ingrese su contraseña"
                    onChange={(e) => SetPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-grid mb-2">
                <button type="submit" className="btn btn-success">
                  Iniciar sesión
                </button>
              </div>
            </form>

            <div className="text-center mt-3">
              <span>¿No tienes cuenta?</span>
              <Link to="/register" className="ms-1">
                Regístrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
