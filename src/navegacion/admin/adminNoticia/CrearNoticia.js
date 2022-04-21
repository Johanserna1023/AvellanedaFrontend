import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import axios from "axios";
/* import {crearNoticiaApi} from "../../../api/noticia" */

const CrearNoticia = (props) => {
  const noticia = props.noticia;
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState({ variant: "success", message: "" });
  const [file, setFile] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const changeForm = (e) => {
    setFile(e.target.files[0]);
  };

  const crearNoticia = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("archivo", file);
    formData.append("titulo", titulo);
    formData.append("texto", texto);
    /* const result = await crearNoticiaApi(formData); */

    await axios
      .post("http://localhost:2750/api/v1/cargar-archivos", formData)
      .then((result) => {
        setShow(true);
        setAlert({
          variant: "success",
          message: "Noticia creada ",
        });
        setTimeout(() => {
          window.location.replace("");
        }, 3000);
      })
      .catch((err) => {
        setShow(true);
        setAlert({
          variant: "danger",
          message: "No se cargo ningun archivo ",
        });
        setTimeout(() => {
          setShow(false);
        }, 3000);
      });
  };

  if (noticia === true) {
    return (
      <>
        <div className="containernoticia">
          <Form onSubmit={crearNoticia} id="noticia">
            <div className="row ">
              <div className="col-sm-12 col-md-6   contenidonoticia">
                <Form.Group className="mb-3">
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese titulo de noticia"
                    name="titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                    id="inputnoticias"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Subir imagen</Form.Label>
                  <Form.Control
                    type="file"
                    name="files"
                    placeholder="Subir archivo"
                    onChange={changeForm}
                    id="inputnoticias"
                  />
                </Form.Group>
              </div>
              <div className="col-sm-12 col-md-6 ">
                <Form.Group className="mb-3">
                  <p>Contenido</p>
                  <textarea
                    name="textarea"
                    className="textarea"
                    rows="10"
                    cols="50"
                    placeholder="Escribir contenido de la noticia"
                    onChange={(e) => setTexto(e.target.value)}
                    id="inputtexarea"
                  />
                </Form.Group>
              </div>
              <div className="col-12">
                <Button type="submit" id="buttonlogin">
                  Guardar
                </Button>
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
            </div>
          </Form>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default CrearNoticia;
