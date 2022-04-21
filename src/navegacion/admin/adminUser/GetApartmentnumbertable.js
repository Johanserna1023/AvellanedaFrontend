
import Table from "react-bootstrap/Table";
import React, { useState} from "react";
import { Alert } from "react-bootstrap";
import {
  Button,
  /* Container, */
  Modal,
  ModalBody,
  ModalHeader,
  /*  FormGroup, */
  ModalFooter,
} from "reactstrap";
import { deleteUserApi } from "../../../api/user";
import { updateUserApi } from "../../../api/user";



const GetApartmentnumbertable = (props) => {
  const usuarios = props.usuarios;
  const table = props.table;
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });


  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    cell: "",
    dateBirth: "",
    apartmentnumber: "",
  });

  const register = async () => {
    //Colocar todos los campos que son obligatorios
    if (
      !usuarioSeleccionado.name ||
      !usuarioSeleccionado.email ||
      !usuarioSeleccionado.password ||
      !usuarioSeleccionado.lastname ||
      !usuarioSeleccionado.cell ||
      !usuarioSeleccionado.dateBirth ||
      !usuarioSeleccionado.apartmentNumber
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
      // Conectar con el API y registrar el usuario
      const result = await updateUserApi(usuarioSeleccionado);

      if (!result.message) {
        setShow(true);
        setAlert({ variant: "success", message: "Usuario actualizado" });
        setTimeout(() => {
          window.location.replace("");
        }, 3000);
      } else {
        setShow(true);
        setAlert({ variant: "danger", message: result.message });
      }
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  };

  const eliminar = async () => {
    const result = await deleteUserApi(usuarioSeleccionado);
    if (result.message) {
      setShow(true);
      setAlert({
        variant: "danger",
        message: result.message,
      });
      setTimeout(() => {
        setShow(false);
      }, 2000);
    } else {
      setShow(true);
      setAlert({
        variant: "success",
        message: "Usuario eliminado",
      });
      setTimeout(() => {
        window.location.replace("");
      }, 2000);
    }
  };

  const seleccionarUsuario = (user, caso) => {
    setUsuarioSeleccionado(user);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  if (table=== true) {
    if (usuarios.length === 0) {
      return <h1>No hay ningun usuario registrado</h1>;
    } else {
      return (
        <>
          <div className="col-12  divtableuser">
            <Table responsive id="tableusers" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>LastName</th>
                  <th>Email</th>
                  <th>Celular</th>
                  <th>Fecha Nacimiento</th>
                  <th>numero Apartamento</th>
                  <th>Actualizar</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user, i) => (
                  <tr key={i}>
                    <td className="td">{i + 1}</td>
                    <td className="td">{user.name}</td>
                    <td className="td">{user.lastname}</td>
                    <td className="td">{user.email}</td>
                    <td className="td">{user.cell}</td>
                    <td className="td">{user.dateBirth}</td>
                    <td className="td">{user.apartmentNumber}</td>
                    <td id="tdactualizar" className="td">
                      <Button
                        id="btneditar"
                        onClick={() => seleccionarUsuario(user, "Editar")}
                      >
                        Editar
                      </Button>
                    </td>
                    <td className="td" id="tdeliminar">
                      <Button
                        id="btneliminar"
                        onClick={() => seleccionarUsuario(user, "Eliminar")}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <Modal isOpen={modalEditar}>
            <ModalHeader>
              <div>
                <h3>Actualizar usuario</h3>
              </div>
            </ModalHeader>

            <ModalBody>
              <div className="form-group">
                <label>ID</label>
                <input
                  className="form-control input"
                  type="text"
                  readOnly
                  name="id"
                  value={usuarioSeleccionado && usuarioSeleccionado._id}
                />
                <br />
                <label>Name</label>
                <input
                  className="form-control input"
                  type="text"
                  name="name"
                  value={usuarioSeleccionado && usuarioSeleccionado.name}
                  onChange={handleChange}
                />
                <br />
                <label>LastName</label>
                <input
                  className="form-control input"
                  type="text"
                  name="lastname"
                  value={usuarioSeleccionado && usuarioSeleccionado.lastname}
                  onChange={handleChange}
                />
                <br />
                <label>Email</label>
                <input
                  className="form-control input"
                  type="email"
                  name="email"
                  value={usuarioSeleccionado && usuarioSeleccionado.email}
                  onChange={handleChange}
                />
                <br />
                
                <label>password</label>
                <input
                  className="form-control input"
                  type="password"
                  name="password"
                  value={usuarioSeleccionado && usuarioSeleccionado.password}
                  onChange={handleChange}
                />
                <br />
                <label>Celular</label>
                <input
                  className="form-control input"
                  type="tel"
                  name="cell"
                  value={usuarioSeleccionado && usuarioSeleccionado.cell}
                  onChange={handleChange}
                />
                <br />
                <label>Fecha Nacimiento</label>
                <input
                  className="form-control input"
                  type="date"
                  name="dateBirth"
                  value={usuarioSeleccionado && usuarioSeleccionado.dateBirth}
                  onChange={handleChange}
                />
                <br />
                <label>Numero apartamento </label>
                <input
                  className="form-control input"
                  type="text"
                  name=" apartmentnumber"
                  value={
                    usuarioSeleccionado && usuarioSeleccionado.apartmentNumber
                  }
                  onChange={handleChange}
                />
                <br />
              </div>
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
            </ModalBody>
            <ModalFooter>
              <Button className="btn " id="btnactualizar" onClick={register}>
                Actualizar
              </Button>
              <Button
                id="btncerrar"
                className="btn btn-danger"
                onClick={() => {
                  setModalEditar(false);
                }}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Modal isOpen={modalEliminar}>
            <ModalHeader>
              Estas seguro que deseas eliminar a:{" "}
              {usuarioSeleccionado && usuarioSeleccionado.email}
            </ModalHeader>
            <ModalBody>
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
            </ModalBody>
            <ModalFooter>
              <Button className="btn " id="btnactualizar" onClick={eliminar}>
                Si
              </Button>
              <Button
                id="btncerrar"
                className="btn btn-danger"
                onClick={() => {
                  setModalEliminar(false);
                }}
              >
                No
              </Button>
            </ModalFooter>
          </Modal>
        </>
      );
    }
  } else {
    return <></>;
  }
};

export default GetApartmentnumbertable;
