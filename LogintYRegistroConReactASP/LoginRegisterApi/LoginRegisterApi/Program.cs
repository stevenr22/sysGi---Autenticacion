using LoginRegisterApi.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// AGREGAR SERVICIOS DE CONEXION A LA BD
var connectionString = builder.Configuration.GetConnectionString("Connection");

// REGISTRAR EL DBCONTEXT CON MARIA DB (con versión autodetectada)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))); //USO GESTOR DE BS MARIA DB

// CONFIGURAR CORS PARA PERMITIR PETICIONES DESDE TU REACT
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
                "http://localhost:5173"
                // "https://f5f0-2800-bf0-8269-10cd-a8b-6422-c85-dad0.ngrok-free.app" //ENDPOINT DE NGROK DEL FRONT (VARIA AL INICIAR EL NGROK)
            )
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// SERVICIO URL
builder.WebHost.ConfigureKestrel(serverOptions =>
{
    serverOptions.Listen(System.Net.IPAddress.Loopback, 5015); // Escucha solo en 127.0.0.1:5015
});


// AGREGAR SERVICIOS DE CONTROLADOR.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();
app.Run();
