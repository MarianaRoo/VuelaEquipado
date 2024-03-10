import React from 'react'

export const Navegacion = () => {
  return (
    <>
        <header style={{color:"white"}}>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <NavLink to="/home">
                        
                    </NavLink>


                    <h1>Sitio Web con React</h1>

                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <h4><NavLink to="/home" className="nav-item nav-link" style={{color:"white"}}>Home</NavLink></h4>
                            <h4><NavLink to="/doctores" className="nav-item nav-link" style={{color:"white"}}>Doctores</NavLink></h4>
                            <h4><NavLink to="/mensajes" className="nav-item nav-link" style={{color:"white"}}>Mensajes</NavLink></h4>
                            <h4><NavLink to="/acercade" className="nav-item nav-link" style={{color:"white"}}>Acerca de...</NavLink></h4>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    </>
  )
}
