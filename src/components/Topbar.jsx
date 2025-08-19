// import React from "react";
// import Scrollspy from "react-scrollspy";

// function Topbar() {
//   return (
//     <div className="top-bar">
//         <div>
//             <h2><span>S</span>oluciones</h2>

//         <Scrollspy
//             items={["Acerca", "Historia", "Maquinaria", "MisionVision", "Contactanos"]}
//             currentClassName="active"
//             componentTag="ul"
//             offset={-100}
//         >
//             <li>
//             <a href="#Acerca">Acerca de nosotros</a>
//             </li>
//             <li>
//             <a href="#Historia">Nuestra historia</a>
//             </li>
//             <li>
//             <a href="#Maquinaria">Maquinaria</a>
//             </li>
//             <li>
//             <a href="#MisionVision">Misión y Visión</a>
//             </li>
//             <li>
//             <a href="#Contactanos" className="contact-us-a">Contactanos</a>
//             </li>
//         </Scrollspy>
        
//         </div>
//     </div>
//   );
// }

// export default Topbar;





















import React, { useState } from "react";
import Scrollspy from "react-scrollspy";

function Topbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="top-bar">
      <button className="hamburger" onClick={toggleMenu}>
      </button>

      <div id="top-bar-inner" className={`menu ${isOpen ? "open" : ""}`}>
        <h2><span>S</span>oluciones</h2>


        <Scrollspy
          items={["Acerca", "Historia", "Maquinaria", "MisionVision", "Contactanos"]}
          currentClassName="active"
          componentTag="ul"
          offset={-100}
          
        >
          <li><a href="#Acerca">Acerca de nosotros</a></li>
          <li><a href="#Historia">Nuestra historia</a></li>
          <li><a href="#Maquinaria">Maquinaria</a></li>
          <li><a href="#MisionVision">Misión y Visión</a></li>
          <li><a href="#Contactanos" className="contact-us-a">Contactanos</a></li>
        </Scrollspy>
      </div>
    </div>
  );
}

export default Topbar;
