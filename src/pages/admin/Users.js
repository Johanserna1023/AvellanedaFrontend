import Button from "react-bootstrap/Button";
import Navbar3 from "../../navegacion/admin/adminUser/Navbar3";
import ListUsers from "../../navegacion/admin/adminUser/ListUser";
import React, { useState } from "react";
import FormRegistro from "../../navegacion/admin/adminUser/FormRegistro";
import DeleteUser from "../../navegacion/admin/adminUser/DeleteUser";
import Get from "../../navegacion/admin/adminUser/Get";
const Users = () => {
  const [listarUsuarios, setListarUsuarios] = useState(false);
  const [encontrarUsuarios, setEncontrarUsuarios] = useState(false);
  const [crearUsuario, setCrearUsuario] = useState(false);
  const [eliminarUsuario, setEliminarUsuario] = useState(false);
  return (
    <>
      <Navbar3 />

      <div className="containeruser ">
        <div className="row">
          <div className="col-md-3  col-sm-12 col-lg-3">
            <Button
              id="busquedas"
              variant="success"
              onClick={() => {
                setListarUsuarios(true);
                setCrearUsuario(false);
                setEliminarUsuario(false);
                setEncontrarUsuarios(false);
              }}
            >
              Listar usuarios
            </Button>
          </div>
          <div className="col-md-3  col-sm-12 col-lg-3">
            <Button
              id="busquedas"
              variant="success"
              onClick={() => {
                setListarUsuarios(false);
                setCrearUsuario(true);
                setEliminarUsuario(false);
                setEncontrarUsuarios(false);
              }}
            >
              Crear usuario
            </Button>
          </div>
          <div className=" col-md-3  col-sm-12 col-lg-3">
            <Button
              id="busquedas"
              variant="success"
              onClick={() => {
                setListarUsuarios(false);
                setCrearUsuario(false);
                setEliminarUsuario(false);
                setEncontrarUsuarios(true);
              }}
            >
              Encontrar usuario
            </Button>
          </div>

          <div className="col-md-3  col-sm-12 col-lg-3">
            <Button
              id="busquedas"
              variant="success"
              onClick={() => {
                setListarUsuarios(false);
                setCrearUsuario(false);
                setEliminarUsuario(true);
                setEncontrarUsuarios(false);
              }}
            >
              Eliminar usuario
            </Button>
          </div>

          <ListUsers listarUsuarios={listarUsuarios} />
          <FormRegistro crearUsuario={crearUsuario} />
          <DeleteUser eliminarUsuario={eliminarUsuario} />

          <Get encontrarUsuarios={encontrarUsuarios} listarUsuarios={listarUsuarios} crearUsuario={crearUsuario} eliminarUsuario={eliminarUsuario} />
        </div>
      </div>
    </>
  );
};

export default Users;
