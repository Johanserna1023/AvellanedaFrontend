import React, { useState, useEffect } from "react";
import { getNoticiasApi } from "../../api/noticia";
import Card from "react-bootstrap/Card";
import fiestaNiños from "../../image/jpg/fiestaNiños.jpg";
import piscina from "../../image/jpg/piscina.jpg";
import tapabocas from "../../image/jpg/usarTapabocas.jpg";

const ListarNoticiaUser = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getNoticiasApi(setNoticias);
  }, []);

  console.log(noticias);

  if (noticias.length === 0) {
    return <h1>No hay ningun usuario registrado</h1>;
  } else {
    return (
      <>
        <div className="containernoticias">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-3">
                <Card>
                  <Card.Img className="cardimg" variant="top" src={piscina} />
                  <Card.Body>
                    <Card.Title>Mantenimiento de piscina </Card.Title>
                    <Card.Text>El proximo 23 y 25 de junio no se prestara servicio de piscina.</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-6 col-sm-12 my-3">
                <Card>
                  <Card.Img className="cardimg" variant="top" src={tapabocas} />
                  <Card.Body>
                    <Card.Title>Tapabocas</Card.Title>
                    <Card.Text>aun no bajemos la guardia, seguir usando el tapabocas para prevenir y asi cuidarnso entre todos</Card.Text>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-6 col-sm-12 my-3">
                <Card>
                  <Card.Img className="cardimg" variant="top" src={fiestaNiños} />
                  <Card.Body>
                    <Card.Title>Encuentro para niños</Card.Title>
                    <Card.Text>Familias traigan a sus niños a la primera fiesta de integracion del año
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
      </>
    );
  }
};

export default ListarNoticiaUser;
