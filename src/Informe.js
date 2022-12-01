import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { CSVLink } from "react-csv";

export function Informe() {
  const params = useParams();
  const [informe, setInforme] = useState([]);
  const [almacen, setAlmacen] = useState([]);
  const cookies = new Cookies();

  const data = [
    {
      Id: informe.id,
      Fecha: informe.fecha,
      Temperatura: informe.temperatura,
      Almacen: almacen.nombre_almacen,
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/detalle/" + params.id)
      .then((res) => {
        setInforme(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8000/api/almacen/" + informe.almacen_id)
      .then((res) => {
        setAlmacen(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="container">
      <div className="row justify-content-center-horizontal">
        <button className="btn btn-success text-center">
          <CSVLink data={data} filename={"Informe.csv"} className="text-light">
            Exportar a CSV
          </CSVLink>
        </button>
      </div>

      <table class="table table-dark mt-3" id="tabla">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Fecha</th>
            <th scope="col">Temperatura</th>
            <th scope="col">Almacen</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{informe.id}</th>
            <td>{informe.fecha}</td>
            <td>{informe.temperatura}</td>
            <td>{almacen.nombre_almacen}</td>
          </tr>
        </tbody>
      </table>
      <div className="row justify-content-center-horizontal">
        <button className="btn">
          <Link to={"/detalles/" + almacen.id}>Volver a Almacen</Link>
        </button>
      </div>
    </div>
  );
}
