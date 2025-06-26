function Main({ nombre, apellido }) {
  return (
    <>
      {/* CONTENIDO DEL CUERPO */}
      <main className="container my-5 flex-grow-1">
        <h2 className="mb-4">
          <i className="bi bi-person-circle me-2"></i>
          Bienvenido al Panel, {nombre} {apellido}
        </h2>

        {/* TARJETAS RÁPIDAS */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-people display-6 text-success mb-2"></i>
                <h5 className="card-title">Usuarios</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-graph-up display-6 text-success mb-2"></i>
                <h5 className="card-title">Estadísticas</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-gear display-6 text-success mb-2"></i>
                <h5 className="card-title">Configuración</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className="bi bi-folder2-open display-6 text-success mb-2"></i>
                <h5 className="card-title">Proyectos</h5>
              </div>
            </div>
          </div>
        </div>

        {/* TABLA */}
        <div className="row mb-5">
          <div className="col-12">
            <h4>
              <i className="bi bi-table me-2"></i>Lista de Usuarios
            </h4>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-success">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td>jperez</td>
                    <td>juan@email.com</td>
                    <td>Admin</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Ana López</td>
                    <td>alopez</td>
                    <td>ana@email.com</td>
                    <td>Usuario</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-1">
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FORMULARIOS */}
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">
                <i className="bi bi-person-plus me-2"></i>Agregar Usuario
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      className="form-control"
                      placeholder="Nombre completo"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Usuario</label>
                    <input className="form-control" placeholder="Usuario" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Correo electrónico"
                    />
                  </div>
                  <button className="btn btn-success">
                    <i className="bi bi-check-circle me-1"></i>Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-header bg-success text-white">
                <i className="bi bi-search me-2"></i>Buscar Usuario
              </div>
              <div className="card-body">
                <form>
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Buscar por nombre o usuario"
                    />
                    <button className="btn btn-success" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Main;