
using System.ComponentModel.DataAnnotations;

namespace LoginRegisterApi.Request
{
    //LOGIN REQUEST REPRESENTA LOS DATOS QUE LLEGAN DEL FRONTEND
    //se usa como parametro del metodo [HttpPost("login")] en mi controlador
    public class LoginRequest
    {
        [Required]
        public string User { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}
