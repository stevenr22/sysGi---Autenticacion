//URL DEL API, YA SEA EN NGROK O EN LOCALHOST, EN NGROK EL ENLACE VARIA AL INICIAR LOS SUBTUNELES CONFIGURADOS
//const API_URL = "https://71b8-2800-bf0-8269-10cd-a8b-6422-c85-dad0.ngrok-free.app/api/auth";
const API_URL = "http://localhost:5015/api/auth";

export const loginUser = async (user, password) => {
  try {
    // Solicitud POST al endpoint de login
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user, password }),
      
    });
    if (!response.ok) {
      throw new Error("Credenciales incorrectas o error del servidor");
      
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};


// REGISTRO
export const RegisterUser = async (
  nombre,
  apellido,
  edad,
  cedula,
  correo,
  usuario,
  direccion,
  contrasena
) => {
  try {
    // Solicitud POST al endpoint de registro
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        apellido,
        edad,
        cedula,
        correo,
        usuario,
        direccion,
        contrasena,
      }),
    });
    if (!response.ok) {
      throw new Error("Credenciales incorrectas o error del servidor");
    }
    const data = await response.json();
   
    return data;
  } catch (error) {
    throw new Error(error.message);
  }

};
