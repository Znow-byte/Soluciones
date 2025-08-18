import React from "react";

const imgVision = process.env.PUBLIC_URL + "/images/planificacion-en-la-construccion.jpg"
const imgMision = process.env.PUBLIC_URL + "/images/recurso-hormigon.jpg"

function MisionVision() {
    return (
            <div id="MisionVision" className="mision-vision-container">

                <div className="mision-content">

                    <img src={imgMision} alt="Imagen de bailarina compactadora" />

                    
                    <div className="mision">

                        <h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
                                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            </svg>
                            Mision
                        </h2>

                        <p>Brindar soluciones integrales y eficientes en renta y venta de maquinaria para construcción, 
                            garantizando a nuestros clientes equipos de calidad, confiables y en óptimas condiciones. 
                            Nos comprometemos a ofrecer un servicio accesible, oportuno y personalizado, que contribuya 
                            al desarrollo exitoso de sus proyectos, impulsando la productividad, la seguridad y la 
                            satisfacción en cada obra.</p>

                    </div>
                </div>

                <div className="vision-content">

                    <img src={imgVision} alt="" />

                    <div className="vision">

                        <h2> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
                                <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
                            </svg>    
                            Vision 
                        </h2>

                        <p>Ser una empresa líder y reconocida a nivel nacional en la renta y venta de maquinaria para construcción, 
                            destacándonos por la excelencia en el servicio, la innovación tecnológica y la confianza que generamos 
                            en nuestros clientes. Aspiramos a consolidarnos como un aliado estratégico en el sector de la 
                            construcción, ampliando nuestra cobertura y manteniendo un compromiso constante con la calidad, 
                            la sostenibilidad y el crecimiento del país.</p>

                    </div>
                </div>
            </div>
    );
}

export default MisionVision;