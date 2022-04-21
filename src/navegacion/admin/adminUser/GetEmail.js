import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { getEmailApi } from "../../../api/user";
import GetEmailtable from "./GetEmailtable";

const GetEmail = (props) => {
  const getEmailP = props.getEmail;

  const [show, setShow] = useState(false);
  const [table, setTable] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [input, setInput] = useState({
    email: "",
  });
  const [usuario, setUsuario] = useState({
    _id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    cell: "",
    dateBirth: "",
    apartmentNumber: "",
  });
  const changeForm = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const getEmail = async (e) => {
    e.preventDefault();
    const result = await getEmailApi(input);
    if (!result._id) {
      setTable(false);
      setShow(true);
      setAlert({
        variant: "danger",
        message: result,
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      setTable(true);
      setUsuario({
        _id: result._id,
        name: result.name,
        lastname: result.lastname,
        email: result.email,
        password:result.password,
        cell: result.cell,
        dateBirth: result.dateBirth,
        apartmentNumber: result.apartmentNumber,
      });
      setShow(true);
      setAlert({
        variant: "success",
        message: "usuario encontrado",
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  if (getEmailP === true) {
    return (
      <>
        <Form onChange={changeForm} onSubmit={getEmail}>
          <div className="container my-3">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese usuario"
                    name="email"
                    id="inputget"
                  />
                  <div className="col-12">
                    <Alert
                      variant={alert.variant}
                      show={show}
                      className="alert"
                    >
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
                </Form.Group>

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
          <GetEmailtable usuario={usuario} table={table} />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default GetEmail;
