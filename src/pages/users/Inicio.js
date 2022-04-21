import React from "react";
import Navbar from "../../navegacion/users/Navbar";
import Carousell from "../../navegacion/users/Carousell";
import Nosotros from "../../navegacion/users/Nosotros";
import Footer from "../../navegacion/users/Footer";
const Inicio = () => {
  return (
    <div>
      <Navbar />
      <Carousell />
      <Nosotros />
      <Footer />
    </div>
  );
};

export default Inicio;
