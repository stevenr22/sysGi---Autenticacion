function Navbar({ handleLogout }) {
  return (
    <>
      {/* NAVBAR COMPLETO */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="bi bi-speedometer2 me-2"></i>sysGi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-house-door me-1"></i>Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-people me-1"></i>Usuarios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bar-chart-line me-1"></i>Reportes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-gear me-1"></i>Configuración
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right me-1"></i>Salir
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;