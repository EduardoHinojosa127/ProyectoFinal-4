import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "universal-cookie";

export default function DetalleAlmacen() {
  const [almacen, setAlmacen] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const params = useParams();
  const cookies = new Cookies();
  useEffect(() => {
    axios.get("http://localhost:8000/api/almacen/" + params.id).then((res) => {
      setAlmacen(res.data);
    });
    axios
      .get("http://localhost:8000/api/detalle2/" + params.id)
      .then((res) => {
        setDetalle(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (!cookies.get("nombre")) {
      window.location.href = "/login";
    }
  });

  return (
    <div className="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">
            Volver a Página de Inicio
          </Link>
        </div>
      </nav>
      <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8">
              <h2 class="text-white mb-4 fs-1">{almacen.nombre_almacen}</h2>
              <p class="text-white-50 fs-5">{almacen.informacion}</p>
              <div className="container">
                <img
                  src={
                    almacen.temperatura > 10
                      ? "https://images.emojiterra.com/google/android-10/512px/1f975.png"
                      : "https://images.emojiterra.com/google/android-11/512px/1f976.png"
                  }
                  alt="..." height={100}
                /><br/>
                <p class="text-white-50 fs-1">🌡 {almacen.temperatura} °C</p>
              </div>
            </div>
          </div>
          <img class="img-fluid" src={almacen.imagen} alt="..." />
          {detalle.map((detalle, index) => {
            return (
              <>
                <br />
                <Link to={"/informe/" + detalle.id} className="text-light">
                  Informe N° {index + 1}
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
