import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { getApartmentNumberApi } from "../../../api/user";
import GetApartmentnumbertable from "./GetApartmentnumbertable";

const GetApartmentNumber = (props) => {
  const getApartmentNumberP = props.getApartmentNumber;
  const [show, setShow] = useState(false);
  const [table, setTable] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [input, setInput] = useState({
    getApartmentNumber: "",
  });
  const [usuarios, setUsuarios] = useState([]);
  const changeForm = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const getApartmentNumber = async (e) => {
    e.preventDefault();
    const result = await getApartmentNumberApi(input);
    if (result.message) {
      setTable(false);
      setShow(true);
      setAlert({
        variant: "danger",
        message: result.message,
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      setTable(true);
      setUsuarios(result);
      setShow(true);
      setAlert({
        variant: "success",
        message: `Usuarios encontrados:  ${result.length}`,
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  if (getApartmentNumberP === true ) {
    return (
      <>
        <Form onChange={changeForm} onSubmit={getApartmentNumber}>
          <div className="container my-3">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <Form.Group className="mb-3" controlId="codigo_apartamento">
                  <Form.Label>Numero apartamento</Form.Label>
                  <Form.Control
                    type="Number"
                    name="apartmentNumber"
                    placeholder="Ingrese numero de apartamento"
                    id="inputget"
                  />
                </Form.Group>
                <div className="col-12">
                  <Alert variant={alert.variant} show={show} className="alert">
                    <div className="containeralert1">
                      <div className="row">
                        <div className="col-sm-8 col-md-10 message">
                          {alert.message}
                        </div>
                        <div className="col-sm-4  col-md-2 alertbutton">
                          <div className="d-flex justify-content-end">
                            <Button
                              id="buttonalert"
                              onClick={() => setShow(false)}
                              variant="outline-success"
                            >
                              Cerrar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Alert>
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="btn"
                  id="buttonlogin"
                >
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </Form>
        <div className="col-12  divtable">
          <GetApartmentnumbertable usuarios={usuarios} table={table} />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default GetApartmentNumber;
