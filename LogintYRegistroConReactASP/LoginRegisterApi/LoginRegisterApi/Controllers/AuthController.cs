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
            //BUSCA EL USUARIO EN LA BASE DE DATOS CON ESTADO ACTIVO
            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u =>
                u.NomUserUsu == request.User &&
                u.ContraUsu == request.Password &&
                u.EstadoUsu == 1);
            //SI NO SE ENCONTRO DEVUELVE ERROR
            if (usuario == null)
            {
                return Unauthorized("Credenciales incorrectas");
            }

            //SI TODO ESTA BIEN DEVUELVE DATOS BASIDOS DEL USUARIO
            return Ok(new
            {
                id = usuario.IdUsu,
                nombre = usuario.NomUsu,
                apellido = usuario.ApeUsu
            });

        }



        //API REGISTER
        //POST: api/register
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // Validar si el usuario ya existe
            if (await _context.Usuarios.AnyAsync(u => u.NomUserUsu == request.Usuario))
                return BadRequest("El usuario ya existe.");

            // Validar si la cédula ya existe
            if (await _context.Usuarios.AnyAsync(u => u.CedulaUsu == request.Cedula))
                return BadRequest("La cédula ya está registrada.");

            // Validar si el correo ya existe
            if (await _context.Usuarios.AnyAsync(u => u.CorreoUsu == request.Correo))
                return BadRequest("El correo ya está registrado.");

            var usuario = new Usuario
            {
                NomUsu = request.Nombre,
                ApeUsu = request.Apellido,
                DirUsu = request.Direccion,
                NomUserUsu = request.Usuario,
                ContraUsu = request.Contrasena,
                CedulaUsu = request.Cedula,
                EdadUsu = request.Edad,
                CorreoUsu = request.Correo,
                
            };

            _context.Usuarios.Add(usuario);
            await _context.SaveChangesAsync();

            return Ok(new { mensaje = "Usuario registrado correctamente" });
        }


       

    }
}
