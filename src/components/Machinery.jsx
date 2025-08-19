import React, { useRef } from "react";

const machineryCards = [
  {
    title: "Placa vibratoria",
    className: "c-one pv",
    img: process.env.PUBLIC_URL + "/images/placa-vibratoria.png",
  },
  {
    title: "Vibrador de concreto",
    className: "c-two vc",
    img: process.env.PUBLIC_URL + "/images/vibrador-de-concreto.png",
  },
  {
    title: "Doble rodillo",
    specs: "1 ton.",
    className: "c-three dr",
    img: process.env.PUBLIC_URL + "/images/doble-rodillo.png",
  },
  {
    title: "Cortadora de concreto",
    specs: 'Disco de corte de 14" y 18"',
    className: "c-one cc",
    img: process.env.PUBLIC_URL + "/images/cortadora-de-concreto.png",
  },
  {
    title: "Bailarina compactadora",
    className: "c-two bc",
    img: process.env.PUBLIC_URL + "/images/bailarina-compactadora.png",
  },
  {
    title: "Mezcladora de concreto",
    className: "c-three mc",
    img: process.env.PUBLIC_URL + "/images/mezcladora-de-concreto.png",
  },
  {
    title: "Generador de energia eléctrica",
    className: "c-one gee",
    img: process.env.PUBLIC_URL + "/images/generador-de-energia-electrica.png",
  },
  {
    title: "Martillo neumático",
    className: "c-two mn",
    img: process.env.PUBLIC_URL + "/images/martillo-neumatico.png",
  },
  {
    title: "Generador soldador",
    className: "c-three gs",
    img: process.env.PUBLIC_URL + "/images/generador-soldador.png",
  },
];

function Machinery() {
  const wrapperRef = useRef(null);
  const cardWidth = 260;

  const scroll = (direction) => {
    if (!wrapperRef.current) return;
    const amount = direction === "next" ? cardWidth : -cardWidth;
    wrapperRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div id="Maquinaria" className="machinery-content">
      <h2>Maquinaria</h2>

      <div className="machinery-row">
        <button className="btn prev" onClick={() => scroll("prev")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
            </svg>
        </button>

        <div className="machinery-wrapper" ref={wrapperRef}>
          <div className="machinery-cards">
            {machineryCards.map((card, index) => (
              <div key={index} className={`m-card ${card.className}`}>
                <div className="content-machinery-card">
                  <h3>{card.title}</h3>
                  {card.specs && <p>{card.specs}</p>}
                  <img src={card.img} alt="imagen maquinaria" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn next" onClick={() => scroll("next")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
        </button>
      </div>
    </div>
  );
}

export default Machinery;
