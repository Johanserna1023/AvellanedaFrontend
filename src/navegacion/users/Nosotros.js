import React from "react";
import foto1 from "../../image/jpg/fotoavellaneda1.jpg";
import foto2 from "../../image/png/png-clipart-technology-machine-programmer-computer-software-industry-administrator-electronics-logo.png";
import usuarios from "../../image/jpg/usuarios.jpg";
import persona3 from "../../image/jpg/persona3.jpg";
const Nosotros = () => {
  return (
    <main>
      <section className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">Misión</h1>
                <p className="lead fw-normal text-muted mb-4">
                  En el conjunto residencial avellaneda lo que se busca es
                  conformar un espacio de vivienda y proporcionar espacios de
                  comunicación, de sana convivencia, en donde reine la armonía,
                  la paz y el respeto para todos los propietarios e inquilinos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="scroll-target">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-5 mb-lg-0 "
                src={foto1}
                alt="..."
                id="foto1"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Nuestra compañía</h2>
              <p className="lead fw-normal text-muted mb-0">
                Esta compañía se dio cuenta, que un conjunto residencial es una
                empresa que necesita tanto herramientas tecnológicas, como un
                equipo de trabajo que permitan optimizar los servicios que le
                presta a sus propietarios e inquilinos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
              <div className="Container">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <img
                      className="img-fluid rounded mb-5 mb-lg-0 "
                      src={usuarios}
                      alt="..."
                      id="foto2"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img
                      className="img-fluid rounded mb-5 mb-lg-0 "
                      src={foto2}
                      alt="..."
                      id="foto2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Crecimiento y proyección</h2>
              <p className="lead fw-normal text-muted mb-0">
                En el conjunto residencial avellaneda queremos ser partícipes de
                las metas a nuestros propietarios e inquilinos, y por esta razón
                se planeó el diseño y la implementación de este aplicativo, con
                el cual la brecha de interacción entre usuarios y parte
                administrativa se realice de una manera más ágil. Haciendo que
                las inconformidades o ideas aporten de forma positiva al
                crecimiento la unidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center">
            <h2 className="fw-bolder">Nuestro equipo</h2>
            <p className="lead fw-normal text-muted mb-5">
              Enfocados en el confort, satisfacción y en prestar el mejor
              servicio para todos inquilinos y propietarios de avellaneda.
            </p>
          </div>
          <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src={persona3}
                  alt="..."
                  width="200px"
                  height="200px"
                />
                <h5 className="fw-bolder">Ramón Fernandéz</h5>
                <div className="fst-italic text-muted">Fundador CEO</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-xl-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src={persona3}
                  alt="..."
                  width="200px"
                  height="200px"
                />
                <h5 className="fw-bolder">Julio Rodriguéz</h5>
                <div className="fst-italic text-muted">Director financiero</div>
              </div>
            </div>
            <div className="col mb-5 mb-5 mb-sm-0">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src={persona3}
                  alt="..."
                  width="200px"
                  height="200px"
                />
                <h5 className="fw-bolder">Marcos Jaramillo</h5>
                <div className="fst-italic text-muted">
                  Director de operaciones
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="text-center">
                <img
                  className="img-fluid rounded-circle mb-4 px-4"
                  src={persona3}
                  alt="..."
                  width="200px"
                  height="200px"
                />
                <h5 className="fw-bolder">Laura Restrepo</h5>
                <div className="fst-italic text-muted">Asesor comercial</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Nosotros;
