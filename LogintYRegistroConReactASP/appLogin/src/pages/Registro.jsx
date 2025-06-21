import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RegisterUser } from "../services/Services";

function Registro() {
  useEffect(() => {
    document.title = "Registro .::. sysGi";
  }, []);

  const navigate = useNavigate();

  const [nombre, SetNombre] = useState("");
  const [apellido, SetApellido] = useState("");
  const [edad, SetEdad] = useState("");
  const [cedula, SetCedula] = useState("");
  const [correo, SetCorreo] = useState("");
  const [usuario, SetUsuario] = useState("");
  const [direccion, SetDireccion] = useState("");
  const [contrasena, SetContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !nombre ||
      !apellido ||
      !edad ||
      !cedula ||
      !correo ||
      !usuario ||
      !direccion ||
      !contrasena ||
      !confirmarContrasena
    ) {
      toast.warn("Por favor, completa todos los campos.");
      return;
    }

    if (contrasena !== confirmarContrasena) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    try {
      const data = await RegisterUser(
        nombre,
        apellido,
        edad,
        cedula,
        correo,
        usuario,
        direccion,
        contrasena
      );

      toast.success("Registro exitoso");

      // Guardar el usuario completo en localStorage como objeto JSON
      localStorage.setItem("user", JSON.stringify(data));

      navigate("/");
    } catch (error) {
      toast.error("Error al registrar: " + error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="card-header bg-success text-white text-center">
          <h2 className="mb-0">Registro</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Ingrese su nombre"
                  autoComplete="name"
                  onChange={(e) => SetNombre(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Ingrese su apellido"
                  onChange={(e) => SetApellido(e.target.value)}
                />
              </div>
            </div>
            
            
            <div className="mb-3">
              <label htmlFor="edad" className="form-label">
                Edad
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="edad"
                  placeholder="Ingrese su edad"
                  onChange={(e) => SetEdad(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="ced" className="form-label">
                Cedula
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="ced"
                  placeholder="Ingrese su cedula"
                  onChange={(e) => SetCedula(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo electronico
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person-vcard"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="correo"
                  placeholder="Ingrese su correo"
                  onChange={(e) => SetCorreo(e.target.value)}
                />
              </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
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
                  placeholder="Ingrese un usuario"
                  autoComplete="username"
                  onChange={(e) => SetUsuario(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="direccion" className="form-label">
                Dirección Domiciliaria
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-geo-alt"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  placeholder="Ingrese su dirección"
                  onChange={(e) => SetDireccion(e.target.value)}
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
                  placeholder="Cree una contraseña"
                  autoComplete="new-password"
                  onChange={(e) => SetContrasena(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirmarContrasena" className="form-label">
                Confirmar Contraseña
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="confirmarContrasena"
                  placeholder="Repita la contraseña"
                  autoComplete="new-password"
                  onChange={(e) => setConfirmarContrasena(e.target.value)}
                />
              </div>
            </div>
            <div className="d-grid mb-2">
              <button type="submit" className="btn btn-success">
                Registrarse
              </button>
            </div>
          </form>
          <div className="text-center mt-3">
            <span>¿Ya tienes cuenta?</span>
            <Link to="/" className="ms-1">
              Inicia sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
