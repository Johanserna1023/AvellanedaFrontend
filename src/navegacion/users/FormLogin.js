import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Alert } from "react-bootstrap";
import imglogin from "../../image/png/login.png";

import { signInApi } from "../../api/user";

const FormLogin = () => {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const login = async (e) => {
    e.preventDefault();
    const result = await signInApi(inputs);
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
      if (inputs.email === "jc.mesa@pascualbravo.edu.co") {
        setShow(true);
        setAlert({
          variant: "success",
          message: "Login de administrador correcto",
        });
        setTimeout(() => {
          window.location.href = "/admin/noticias";
        }, 3000);
      } else {
        setShow(true);
        setAlert({
          variant: "success",
          message: "Login de usuario correcto",
        });
        setTimeout(() => {
          window.location.href = "/noticias";
        }, 3000);
      }
    }
  };
  return (
    <div className="containerlogin my-3">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <Image src={imglogin} fluid />
        </div>
        <div className="col-sm-12 col-md-12">
          <Form onChange={changeForm} onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese usuario"
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese su contraseña"
                name="password"
              />
            </Form.Group>
            <div className="col-12">
              <Alert variant={alert.variant} show={show} id="alert">
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

            <Button type="submit" id="buttonlogin">
              Ingresar
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
