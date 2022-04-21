import React from "react";
import Footer from "../../navegacion/users/Footer";
import ListarNoticiaUser from "../../navegacion/users/ListarNoticiaUser";
import Navbar2 from "../../navegacion/users/Navbar2";

const Noticias = () => {
  return (
    <>
      <Navbar2 />
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">Noticias actualizadas</h1>
                <p className="lead fw-normal text-muted mb-4">
                  En el conjunto residencial avellaneda buscamos el mayor
                  confort para todos los inquilinos, propietarios y
                  contratistas. y por esta razón en esta sección del sitio web,
                  siempre estarán informados de las novedades más recientes de
                  la unidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ListarNoticiaUser />
      <Footer />
    </>
  );
};

export default Noticias;
