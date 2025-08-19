import React from "react";

const date = new Date().getFullYear();

function ContactUs() {
    return (
        <div id="Contactanos" className="contact-us-content">
            <div className="contact-us">

                <h2> Conversemos sobre su proyecto </h2>
                <p>Contáctenos y reciba la mejor solución en maquinaria para su proyecto.</p>

                <div className="phone-contact"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>

                    <p>Contáctenos al <br /> +502 1234 5678</p>
                </div>
            </div>

            <div className="footer"> 
                <div className="logo-address-contact">

                    <h3>Soluciones</h3>
                    <p className="address">1 avenida 1-15, Quetzaltenango <br />09001</p>
                    <p>solucionesrent@gmail.com</p>
                    <p>+502 1234 5678</p>
                </div>

                <div className="pages">
                    <ul>
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
                    </ul>
                </div>

                <div className="social-media">
                    <ul>
                        <li className="facebook">
                            <a href="https://www.facebook.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                </svg>
                            </a>
                        </li>
                        <li className="whatsapp">
                            <a href="https://web.whatsapp.com/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="phrase-copyright">
                    <p className="phrase">Líderes en soluciones integrales de maquinaria para la construcción, 
                        comprometidos con la calidad, la seguridad y la eficiencia en cada proyecto, ofreciendo 
                        un servicio confiable y adaptado a las necesidades de nuestros clientes.</p>
                    <p className="copyright"> © {date} Soluciones. Todos los derechos reservados.</p>
                </div>



            </div>
        </div>
    );
}

export default ContactUs;