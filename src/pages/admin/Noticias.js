import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import CrearNoticia from "../../navegacion/admin/adminNoticia/CrearNoticia";
import ListarNoticia from "../../navegacion/admin/adminNoticia/ListarNoticia";
import Navbar3 from "../../navegacion/admin/adminUser/Navbar3";

const Noticias = () => {

  const [noticia,setNoticia] = useState(false)
  const [listarNoticia,setListarNoticia] = useState(false)
  return (
    <>
    <Navbar3 />
      <div className="containerAdminHome">
        <div className="row">
          <div className="col-md-6  col-sm-12">
            <Button className="btnnoticias" variant="success"
             id="busquedasnoticias"
             onClick={() => {
              setNoticia(true);
              setListarNoticia(false);
              
            }}
            >
              Crear Noticia
            </Button>
          </div>
          <div className="col-md-6  col-sm-12">
            <Button className="btnnoticias" variant="success"
             id="busquedasnoticias"
              onClick={() => {
                setListarNoticia(true);
                setNoticia(false);
                
              }}
            >
              Listar noticias
            </Button>
          </div>
        </div>
      </div>
      <CrearNoticia noticia={noticia}/>
      <ListarNoticia listarNoticia={listarNoticia}/>
    </>
  );
};

export default Noticias;
