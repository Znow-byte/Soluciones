// import React from "react";
// import Scrollspy from "react-scrollspy";


// function Topbar() {
//     return (
//         <Scrollspy
//             items={["Acerca", "Maquinaria", "contacto"]}
//             currentClassName="active"
//         >
//         <div className="top-bar"> 
//             <h2>Soluciones</h2>
//             <ul>
//                 <li><a href="#Acerca" > Acerca de nosotros </a></li>
//                 <li><a href="#Maquinaria"> Maquinaria </a></li>
//                 <li><a href="#Mision"> Misión </a></li>
//                 <li><a href="#Vision"> Visión </a></li>
//                 <li><a href="#Contactanos" className="contact-us-a"> Contactanos </a></li>
//             </ul>
//         </div>
//         </Scrollspy>
//     );
// }

// export default Topbar;









import React from "react";
import Scrollspy from "react-scrollspy";

function Topbar() {
  return (
    <div className="top-bar">
        <div>
            <h2><span>S</span>oluciones</h2>

        <Scrollspy
            items={["Acerca", "Maquinaria", "MisionVision", "Contactanos"]}
            currentClassName="active"
            componentTag="ul"
            offset={-100}
        >
            <li>
            <a href="#Acerca">Acerca de nosotros</a>
            </li>
            <li>
            <a href="#Maquinaria">Maquinaria</a>
            </li>
            <li>
            <a href="#MisionVision">Misión y Visión</a>
            </li>
            <li>
            <a href="#Contactanos" className="contact-us-a">Contactanos</a>
            </li>
        </Scrollspy>
        
        </div>
    </div>
  );
}

export default Topbar;
