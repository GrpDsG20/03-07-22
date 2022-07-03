import React from "react";
import "./FooterPag.css";
import Logo from "../img/logo-imcetron.svg";
import book from "../img/Group 90.png";
import ubi from "../img/ubi.png";
import tel from "../img/tel.png";
import email from "../img/email.png";


 export function FooterPag() {


  return (
<>
<div className="footerp">
<div class="footer-content">
 <div className="logoFooter">
  <img
            src={Logo} 
            alt="fireSpot"
           />
  </div>
  <div class="footer-menu">
      <ul className="conte">
         <li><a href=""><img className="icons" src={tel}/> +51 994 013 327</a></li>
        <li><a href=""><img className="icons" src={ubi}/> Calle La Colonia Nro. 116, Rimac </a></li>
        <li><a href=""><img className="icons" src={email}/> ventas@imcetron.com.pe </a></li>
      </ul>
     
   </div>
  

   <div class="socials">
    <ul className="boo">
    <li><a href="/Book"><img className="icons" src={book}/> Libro de Reclamos</a></li>
    </ul>

    </div>

    </div>
  
<div class="footer-bottom">
    <p><a href="#">imcetron </a> &copy; {new Date().getFullYear()} | Todos los Derechos Reservados</p>
</div>
</div>

</>

  );
}