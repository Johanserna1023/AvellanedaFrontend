import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import GetEmail from "./GetEmail";
import GetApartmentNumber from "./GetApartmentNumber";
const Get = (props) => {
  const get = props.encontrarUsuarios;
/*   const listarUsuarios = props.listarUsuarios;
  const crearUsuario = props.crearUsuario;
  const eliminarUsuario = props.eliminarUsuario; */

  const [getEmail, setGetEmail] = useState(false);
  const [getApartmentNumber, setGetApartmentNumber] = useState(false);

  if (get === true) {
    return (
      <>
        <div className="containerget">
          <div className="row">
            <div className="col-md-6  col-sm-12 ">
              <Button
                id="busquedasget"
                variant="success"
                onClick={() => {
                  setGetEmail(true);
                  setGetApartmentNumber(false);
                }}
              >
                Buscar por correo electronico
              </Button>
            </div>
            <div className="col-md-6  col-sm-12 ">
              <Button
                id="busquedasget"
                variant="success"
                onClick={() => {
                  setGetApartmentNumber(true);
                  setGetEmail(false);
                }}
              >
                Buscar por apartamento
              </Button>
            </div>
          </div>
        </div>
        <GetEmail getEmail={getEmail} />
        <GetApartmentNumber getApartmentNumber={getApartmentNumber} />
      </>
    );
  } else {
    return <></>;
  }
};

export default Get;
