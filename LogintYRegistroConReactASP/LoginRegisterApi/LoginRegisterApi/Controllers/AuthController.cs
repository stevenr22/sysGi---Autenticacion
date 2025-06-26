using LoginRegisterApi.Context;
using LoginRegisterApi.Models;
using LoginRegisterApi.Request;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetCoreWebApi.Controllers


{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly AppDbContext _context;
        public AuthController(AppDbContext context)
        {
            _context = context;
        }


        //POST: api/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                var usuario = await _context.Usuarios
                    .FirstOrDefaultAsync(u =>
                        u.UserNameUsu == request.User &&
                        u.ContraUsu == request.Password &&
                        u.EstadoUsu == 1);

                if (usuario == null)
                {
                    return Unauthorized(new
                    {
                        tipo = "warning",
                        mensaje = "Credenciales incorrectas o usuario inactivo"
                    });
                }

                return Ok(new
                {
                    id = usuario.IdUsu,
                    nombre = usuario.NomUsu,
                    apellido = usuario.ApeUsu,
                    mensaje = "Inicio de sesión exitoso"
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    tipo = "error",
                    mensaje = "Error interno del servidor",
                    detalle = ex.Message
                });
            }
        }




        //API REGISTER
        //POST: api/register
        [HttpPost("register")]
        public async Task<IActionResult> Registrar([FromBody] RegisterRequest request)
        {
            try
            {
                // Validar si el nombre de usuario ya existe
                if (await _context.Usuarios.AnyAsync(u => u.UserNameUsu == request.Usuario))
                {
                    return BadRequest(new { tipo = "warning", mensaje = "El usuario ya existe." });
                }

                // Validar si el correo ya está registrado
                if (await _context.Usuarios.AnyAsync(u => u.CorreoUsu == request.Correo))
                {
                    return BadRequest(new { tipo = "warning", mensaje = "El correo ya está registrado." });
                }

                // Crear el nuevo usuario
                var nuevoUsuario = new Usuario
                {
                    NomUsu = request.Nombre,
                    ApeUsu = request.Apellido,
                    EdadUsu = request.Edad,
                    CorreoUsu = request.Correo,
                    UserNameUsu = request.Usuario,
                    DirUsu = request.Direccion,
                    ContraUsu = request.Contrasena,
                    IdRol = 2 // Rol por defecto
                };

                _context.Usuarios.Add(nuevoUsuario);
                await _context.SaveChangesAsync();

                return Ok(new { mensaje = "Usuario registrado correctamente" });
            }
            catch (Exception ex)
            {
                // Captura cualquier error inesperado y devuelve error tipo "error"
                return StatusCode(500, new
                {
                    tipo = "error",
                    mensaje = "Error interno del servidor.",
                    detalle = ex.Message // Puedes quitar esto en producción
                });
            }
        }





    }
}
