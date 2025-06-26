//URL DEL API, YA SEA EN NGROK O EN LOCALHOST, EN NGROK EL ENLACE VARIA AL INICIAR LOS SUBTUNELES CONFIGURADOS
//const API_URL = "https://71b8-2800-bf0-8269-10cd-a8b-6422-c85-dad0.ngrok-free.app/api/auth";
const API_URL = "http://localhost:5015/api/auth";

export const loginUser = async (user, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ user, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { ok: false, tipo: data.tipo, mensaje: data.mensaje };
    }

    return { ok: true, mensaje: data.mensaje, data };
  } catch (error) {
    return {
      ok: false,
      tipo: "error",
      mensaje: "No se pudo conectar al servidor",
    };
  }
};



// REGISTRO
export const RegisterUser = async (
  nombre,
  apellido,
  edad,
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
        correo,
        usuario,
        direccion,
        contrasena,
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      // Aquí devolvemos el tipo y mensaje para que el componente decida cómo mostrarlo
      return { ok: false, tipo: data.tipo, mensaje: data.mensaje };
    }
    
   
     return { ok: true, mensaje: data.mensaje }; // Registro exitoso
  } catch (error) {
    return { ok: false, tipo: "error", mensaje: "No se pudo conectar al servidor." };
  }

};
