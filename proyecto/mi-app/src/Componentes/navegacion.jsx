import React from 'react'
import logoavion from '../src/imagenes/avion.jpeg'

export const navegacion = () => {
  return (
    <>
        <Header style={{color:"white"}}>
            <nav className='navbar navbar-expand-log navbar-light bg-primary'>
                <a href="">
                    <img src={logoavion} height="100" alt='No encontrada'/>
                    
                </a>
                <h1>Sitio ventas</h1>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className='navbar-toggler-icon'></span>

            </nav>

        </Header>
    </>
  )
}