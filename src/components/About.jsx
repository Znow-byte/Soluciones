// import React from "react";

// function About() {
//     return (
//         <div id="Acerca" className="about-content">

//             <div className="about-us">
//                 <h2>Acerca de nosotros</h2>
//                 <p>En Soluciones Rentables, creemos que cada proyecto de construcción merece herramientas confiables y un
//                     respaldo comprometido. Nos mueve la eficiencia, la innovación y el deseo de ser más que un proveedor:
//                     un aliado estratégico para tu obra.</p>
//             </div>



//             <div className="about-cards">
//                 <div className="card one">
//                     <div className="content-card">
//                         <h3>¿Quiénes somos?</h3>
//                         <p>Una empresa guatemalteca dedicada a brindar soluciones en maquinaria pesada para construcción.</p>
//                     </div>
//                 </div>
                
//                 <div className="card two">
//                     <div className="content-card">
//                         <h3>¿Qué hacemos?</h3>
//                         <p>Renta, venta y mantenimiento de equipos con soporte técnico profesional.</p>
//                     </div>
//                 </div>

//                 <div className="card three">
//                     <div className="content-card">
//                         <h3>¿Por qué elegirnos?</h3>
//                         <p>Atención personalizada, equipos confiables y compromiso con la eficiencia de tu equipo.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default About;



















import React from "react";

const cards = [
  {
    title: "¿Quiénes somos?",
    text: "Una empresa guatemalteca dedicada a brindar soluciones en maquinaria pesada para construcción.",
    className: "one",
  },
  {
    title: "¿Qué hacemos?",
    text: "Renta, venta y mantenimiento de equipos con soporte técnico profesional.",
    className: "two",
  },
  {
    title: "¿Por qué elegirnos?",
    text: "Atención personalizada, equipos confiables y compromiso con la eficiencia de tu equipo.",
    className: "three",
  },
  
];

function About() {
  return (
    <div id="Acerca" className="about-content">
      <div className="about-us">
        <h2>Acerca de nosotros</h2>
        <p>
          En Soluciones Rentables, creemos que cada proyecto de construcción
          merece herramientas confiables y un respaldo comprometido. Nos mueve
          la eficiencia, la innovación y el deseo de ser más que un proveedor:
          un aliado estratégico para tu obra.
        </p>
      </div>



      <div className="about-cards">
        
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.className}`}>
            <div className="content-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default About;
