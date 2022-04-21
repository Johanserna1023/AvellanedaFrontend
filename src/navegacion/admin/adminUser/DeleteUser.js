import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { deleteUserApi } from "../../../api/user";

const DeleteUser = (props) => {
  const eliminarUsuario = props.eliminarUsuario;
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [input, setInput] = useState({
    email: "",
  });
  const changeForm = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const eliminar = async (e) => {
    e.preventDefault();
    const result = await deleteUserApi(input);
    if (result.message) {
      setShow(true);
      setAlert({
        variant: "danger",
        message: result.message,
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      setShow(true);
      setAlert({
        variant: "success",
        message: result,
      });
      setTimeout(() => {
        window.location.replace("");
      }, 3000);
    }
  };

  if (eliminarUsuario === true) {
    return (
      <div className="container my-3">
        <div className="row">
          <Form onChange={changeForm} onSubmit={eliminar}>
            <div className="col-sm-12 col-md-12">
              <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese usuario"
                  name="email"
                  id="inputget"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-12">
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
            <Button variant="primary" type="submit" id="buttonlogin">
              Eliminar
            </Button>
          </Form>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DeleteUser;
