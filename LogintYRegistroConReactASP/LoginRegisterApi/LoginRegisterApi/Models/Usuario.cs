using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginRegisterApi.Models
{
    //REPRESENTA MI TABLA DE LA BD
    public class Usuario
    {
        [Key]
        public int IdUsu { get; set; }
        [Required]
        public string NomUsu { get; set; } = string.Empty;
        [Required]
        public string ApeUsu { get; set; } = string.Empty;
        [Required]
        public string DirUsu { get; set; } = string.Empty;
        [Required]
        public int CedulaUsu { get; set; }
        [Required]
        public int EdadUsu { get; set; }
        [Required]
        public string NomUserUsu { get; set; } = string.Empty;
        [Required]
        public string CorreoUsu { get; set; } = string.Empty;
        [Required]
        public string ContraUsu { get; set; } = string.Empty;
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)] // FECHA DE REGISTRO LA MANEJA LA BASE DE DATOS
        public DateTime FechaRegUsu { get; set; } 
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)] // ESTADO DE REGISTRO LA MANEJA LA BASE DE DATOS
        public int EstadoUsu { get; set; }

    }
}
