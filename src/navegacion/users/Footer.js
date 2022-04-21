import React, { useState } from "react";
import Maps from "./Maps";

import {
  Button,
  /* Container, */
  Modal,
  ModalBody,
  ModalHeader,
  /*  FormGroup, */
  ModalFooter,
} from "reactstrap";

const Footer = () => {
  const [mapa, setMapa] = useState(false);
 
  return (
    <>
      <footer className="page-footer mt-5 footerestilos">
        <div className="container text-center text-md-left mt-5 p-5">
          <div className="row">
            {/* la primera columna */}
            <div className="col-sm-12 col-md-4">
              <h6 className="text-uppercase font-weight-bold ">
                Mapa de navegación
              </h6>
              <Button
                id="btnmaps"
                variant="success"
                onClick={() => {
                  setMapa(true);
                }}
              >
                Abrir
              </Button>
            </div>

            {/* la segnda columna */}
            <div className="col-sm-6 col-md-4">
              <h6 className="text-uppercase font-weight-bold ">Enlaces</h6>

              <ul className="list-unstyled ">
                <li className="my-2">
                  <a href="/" className="linksfooter">
                    Inicio
                  </a>
                </li>
                <li className="my-2">
                  <a href="/registro" className="linksfooter">
                    Registro
                  </a>
                </li>
                <li className="my-2 ">
                  <a href="/iniciarSesion" className="linksfooter">
                    iniciar sesión
                  </a>
                </li>
              </ul>
            </div>

            {/* latercera columna */}
            <div className="col-sm-6 col-md-4">
              <h6 className="text-uppercase font-weight-bold ">Contacto</h6>

              <ul className="list-unstyled">
                <li className="my-2 ">
                  <i className="fas fa-home mr-3"></i> Bello, Antioquia, Col.
                </li>
                <li className="my-2">
                  <i className="fas fa-envelope mr-3"></i> avellaneda@gmail.com
                </li>
                <li className="my-2">
                  <i className="fas fa-mobile-alt mr-3"></i> (+57) 3502397470
                </li>
                <li className="my-2 ">
                  <i className="fas fa-mobile-alt mr-3"></i> (+57) 3177598020
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-light">
          <p> Urbanizacion residencial Avellaneda </p>
          <p>Diseñado por CESDE</p>
        </div>
      </footer>

      <Modal isOpen={mapa}>
        <ModalHeader>Mapa de navegacion</ModalHeader>
        <ModalBody>
          <Maps mapa={mapa} />
        </ModalBody>
        <ModalFooter>
          <Button
            id="btnmaps"
            variant="success"
            onClick={() => {
              setMapa(false);
            }}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Footer;
