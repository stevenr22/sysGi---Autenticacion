namespace LoginRegisterApi.Request
{
    // RegisterRequest representa los datos que llegan del frontend
    // Se usa como parámetro del método [HttpPost("register")] en el controlador
    public class RegisterRequest
    {
        public string Nombre { get; set; } = string.Empty;
        public string Apellido { get; set; } = string.Empty;
        public string Direccion { get; set; } = string.Empty;
       
        public int Edad { get; set; }
        public string Usuario { get; set; } = string.Empty;
        public string Correo { get; set; } = string.Empty;
        public string Contrasena { get; set; } = string.Empty;
       
    }
}