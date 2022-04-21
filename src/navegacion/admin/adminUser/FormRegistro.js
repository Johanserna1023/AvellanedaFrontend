import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  emailValidation,
  minLengthValidation,
  soloCaracteres,
  soloNumeros,
} from "../../../utils/FormValidation.js";
import { signUpApi } from "../../../api/user";

const FormRegistro = (props) => {
  const crearUsuario = props.crearUsuario;
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });

  const inputInicial = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    cell: "",
    dateBirth: "",
    apartmentNumber: "",
    privacyPolicy: "",
  };
  const [input, setInputs] = useState(inputInicial);

  const [formValid, setFormValid] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
    repeatPassword: false,
    cell: false,
    apartmentNumber: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInputs({
        ...input,
        [e.target.name]: e.target.checked,
      });
    } else {
      setInputs({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const inputValidation = (e) => {
    const { type, name } = e.target;

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }

    if (type === "tel" || type === "Number") {
      setFormValid({ ...formValid, [name]: soloNumeros(e.target) });
    }
    if (type === "text") {
      setFormValid({ ...formValid, [name]: soloCaracteres(e.target) });
    }

    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }

    if (type === "checkbox") {
      console.log(e.target.checked);
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };
  const register = async (e) => {
    e.preventDefault();
    const nameVal = input.name;
    const lastNameVal = input.lastName;
    const emailVal = input.email;
    const passwordVal = input.password;
    const repeatPasswordVal = input.repeatPassword;
    const privacyPolicyVal = input.privacyPolicy;

    //Colocar todos los campos que son obligatorios
    if (
      !nameVal ||
      !lastNameVal ||
      !emailVal ||
      !passwordVal ||
      privacyPolicyVal
    ) {
      setShow(true);
      setAlert({
        variant: "danger",
        message: "Todos los campos son obligatorios",
      });
      setTimeout(() => {
        setShow(false);
      }, 3000);
    } else {
      if (passwordVal !== repeatPasswordVal) {
        setShow(true);
        setAlert({
          variant: "danger",
          message: "Las contraseñas deben ser iguales",
        });
        setTimeout(() => {
          setShow(false);
        }, 3000);
      } else {
        // Conectar con el API y registrar el usuario
        const result = await signUpApi(input);

        if (result.email !== null && result.email !== undefined) {
          setShow(true);
          setAlert({ variant: "success", message: "Usuario creado" });
          setInputs(inputInicial);
          setTimeout(() => {
            window.location.replace("");
          }, 3000);
        } else {
          setShow(true);
          setAlert({ variant: "danger", message: result });
        }
        setTimeout(() => {
          setShow(false);
        }, 3000);
      }
    }
  };

  if (crearUsuario === true) {
    return (
      <div className="containerRegadmin">
        <form onSubmit={register} onChange={changeForm}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Ingrese su/sus nombres"
                  value={input.name}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Ingrese su/sus apellidos"
                  value={input.lastName}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingrese correo electronico"
                  value={input.email}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Ingrese contraseña "
                  value={input.password}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="repeatPassword">
                <Form.Label>Nuevamente contraseña</Form.Label>
                <Form.Control
                  type="Password"
                  name="repeatPassword"
                  placeholder="Confirmar contraseña"
                  value={input.repeatPassword}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>

            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="cell">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="tel"
                  name="cell"
                  placeholder="Ingrese numero de celular"
                  value={input.cell}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="fecha_nacimiento">
                <Form.Label>Fecha nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="dateBirth"
                  placeholder="Ingrese su fecha de nacimiento"
                  defaultValue={input.dateBirth}
                  className="input"
                />
              </Form.Group>
            </div>

            <div className="col-sm-12 col-md-4">
              <Form.Group className="mb-3" controlId="codigo_apartamento">
                <Form.Label>Numero apartamento</Form.Label>
                <Form.Control
                  type="Number"
                  name="apartmentNumber"
                  placeholder="Ingrese numero de apartamento"
                  value={input.apartmentNumber}
                  onChange={inputValidation}
                  className="input"
                />
              </Form.Group>
            </div>

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

            <div className="col-sm-12 col-md-12 registro">
              <Button className="btn" variant="primary" type="submit">
                Registarse
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    return <></>;
  }
};

export default FormRegistro;
