import axios from "axios";
import { Component } from "react";

export class Epps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      epps: [],
      pos: null,
      nombre: "Nuevo",
      imagen: "",
      id: 0,
      descripcion: "",
      almacen_id: 0,
    };
  }
  componentDidMount() {
    axios.get("http://192.168.187.226:8000/api/epps").then((res) => {
      console.log(res.data);
      this.setState({ epps: res.data });
    });
  }
  render() {
    return (
      <div>
        <section class="projects-section bg-light" id="projects">
          <div class="container px-4 px-lg-5">
            {this.state.epps.map((epp, index) => {
              return (
                <div
                  className={
                    index % 2 !== 0
                      ? "row gx-0 mb-5 mb-lg-0 justify-content-center"
                      : "row gx-0 justify-content-center"
                  }
                >
                  <div class="col-lg-6">
                    <img class="img-fluid" src={epp.imagen} alt="..." />
                  </div>
                  <div
                    className={
                      index % 2 !== 0 ? "col-lg-6 order-lg-first" : "col-lg-6"
                    }
                  >
                    <div class="bg-black text-center h-100 project">
                      <div class="d-flex h-100">
                        <div
                          className={
                            index % 2 !== 0
                              ? "project-text w-100 my-auto text-center text-lg-left"
                              : "project-text w-100 my-auto text-center text-lg-right"
                          }
                        >
                          <h4 class="text-white">{epp.nombre_epp}</h4>
                          <p class="mb-0 text-white-50">
                            {epp.informacion_epp}
                          </p>
                          <hr class="d-none d-lg-block mb-0 ms-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}
