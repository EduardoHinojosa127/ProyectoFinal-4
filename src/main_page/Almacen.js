import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export class Almacen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      almacenes: [],
      pos: null,
      nombre: "Nuevo",
      estado: "",
      id: 0,
      temp: "",
      info: "",
      imagen:'',
    };
  }
  componentDidMount() {
    axios.get("http://192.168.187.226:8000/api/almacenes").then((res) => {
      console.log(res.data);
      this.setState({ almacenes: res.data });
      console.log(this.almacenes);
    });
  }

  render() {
    return (
      <section class="projects-section bg-light" id="almacen">
        {this.state.almacenes.map((almacen, index) => {
          return (
            <div class="container px-4 px-lg-5">
              <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7">
                  <img
                    class="img-fluid mb-3 mb-lg-0"
                    src={almacen.imagen}
                    alt="..."
                  />
                </div>
                <div class="col-xl-4 col-lg-5">
                  <div class="featured-text text-center text-lg-left">
                    <h4><Link to={'/detalles/'+almacen.id}>{almacen.nombre_almacen}</Link></h4>
                    <p class="text-black-50 mb-0">
                      {almacen.informacion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
