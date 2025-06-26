using LoginRegisterApi.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginRegisterApi.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Usuario> Usuarios { get; set; }
        

       
    }
}
