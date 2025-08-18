import React from "react";

function Main(){

    // Ruta de la imagen relativa al archivo js
    const imagen = "/images/aplanadora.jpg";


    return (
        <div className="main-content">
            
            <div className="focusing">
                <h1>Movemos tu obra con maquinaria <br />y confianza</h1>
                <p>Somos tu aliado integral para la renta, venta y mantenimiento <br/>de maquinaria para construcción.</p>
            </div>

            <img src={imagen} alt="imagen de aplanadora" className="aplanadora-img"/>
        </div>
    );
}

export default Main;