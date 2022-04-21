import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {
  emailValidation,
  minLengthValidation,
  soloCaracteres,
  soloNumeros,
} from "../../../utils/FormValidation.js";
import { updateUserApi } from "../../../api/user";

const UpdateUser = (props) => {
  const usuarioEncontrado = props.usuarioEncontrado;
  const user = props.user;
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [input, setInputs] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    cell: "",
    dateBirth: "",
    apartmentNumber: "",
    privacyPolicy: "",
  });

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

  const update = async (e) => {
    e.preventDefault();
    const nameVal = input.name;
    const lastNameVal = input.lastName;
    const emailVal = input.email;
    const passwordVal = input.password;
    const repeatPasswordVal = input.repeatPassword;
    const privacyPolicyVal = input.privacyPolicy;

    //Colocar todos los campos que son obligatorios
    /*    if (
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
    } else { */
    if (passwordVal !== repeatPasswordVal) {
      setShow(true);
      setAlert({
        variant: "danger",
        message: "Las contraseñas deben ser iguales",
      });
    } else {
      // Conectar con el API y registrar el usuario
      const result = await updateUserApi(input);

      if (result === "Usuario actualizado") {
        setShow(true);
        setAlert({ variant: "success", message: "Usuario creado" });
      } else {
        setShow(true);
        setAlert({ variant: "danger", message: result });
      }
    }
  };

  if (usuarioEncontrado === true) {
    return (
      <>
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <Table
                responsive
                className="tableusers"
                striped
                bordered
                hover
                variant="dark"
              >
                <thead>
                  <tr>
                    <th>Nombre actual</th>
                    <th>Apellido actual</th>
                    <th>Email actual</th>
                    <th>Celular actual</th>
                    <th>Fecha Nacimiento actual</th>
                    <th>numero Apartamento actual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.cell}</td>
                    <td>{user.dateBirth}</td>
                    <td>{user.apartmentNumber}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <form onSubmit={update} onChange={changeForm}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <Form.Group className="mb-3" controlId="id">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" name="id" defaultValue={user.id} />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={input.name}
                  placeholder="Ingrese su/sus nombres nuevos"
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={input.lastname}
                  placeholder="Ingrese su/sus apellidos nuevos"
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="Ingrese correo electronico nuevo"
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={input.password}
                  placeholder="Ingrese contraseña nueva "
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="repeatPassword">
                <Form.Label>Nuevamente contraseña</Form.Label>
                <Form.Control
                  type="Password"
                  name="repeatPassword"
                  value={input.repeatPassword}
                  placeholder="Confirmar contraseña nueva "
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>

            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="cell">
                <Form.Label>Celular</Form.Label>
                <Form.Control
                  type="tel"
                  name="cell"
                  value={input.cell}
                  placeholder="Ingrese numero de celular nuevo"
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="fecha_nacimiento">
                <Form.Label>Fecha nacimiento</Form.Label>
                <Form.Control
                  type="date"
                  name="dateBirth"
                  defaultValue={input.dateBirth}
                  placeholder="Ingrese su fecha de nacimiento nueva"
                />
              </Form.Group>
            </div>

            <div className="col-sm-12 col-md-6">
              <Form.Group className="mb-3" controlId="codigo_apartamento">
                <Form.Label>Numero apartamento</Form.Label>
                <Form.Control
                  type="Number"
                  name="apartmentNumber"
                  value={input.apartmentNumber}
                  placeholder="Ingrese numero de apartamento nuevo"
                  onChange={inputValidation}
                />
              </Form.Group>
            </div>
            <Form.Group
              type="checkbox"
              name="privacyPolicy"
              className="mb-3 check"
              controlId="formHorizontalCheck"
              onChange={inputValidation}
              checked={input.privacyPolicy}
            >
              <Form.Check label="He leido y acepto las politicas de privacidad" />
            </Form.Group>

            <Alert variant={alert.variant} show={show}>
              {alert.message}
              <div className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(false)}
                  /* variant="outline-success" */
                >
                  Cerrar
                </Button>
              </div>
            </Alert>

            <div className="col-sm-12 col-md-12 registro">
              <Button className="btn" variant="primary" type="submit">
                Registarse
              </Button>
            </div>
          </div>
        </form>
      </>
    );
  } else {
    return <></>;
  }
};

export default UpdateUser;
