import axios from "axios";
import { useState, useEffect, Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import swal from 'sweetalert';

const cookies = new Cookies();

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      pos: null,
      nombre: "",
      apellidos: "",
      email: "",
      password: "",
      estado: "A",
      sexo: "",
      direccion: "",
      telefono: "",
    };
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioApellidos = this.cambioApellidos.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioPassword = this.cambioPassword.bind(this);
    this.cambioSexo = this.cambioSexo.bind(this);
    this.cambioDireccion = this.cambioDireccion.bind(this);
    this.cambioTelefono = this.cambioTelefono.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  cambioNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
    console.log(this.state.nombre);
  }
  cambioApellidos(e) {
    this.setState({
      apellidos: e.target.value,
    });
  }
  cambioEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  cambioPassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  cambioSexo(e) {
    this.setState({
      sexo: e.target.value,
    });
  }
  cambioDireccion(e) {
    this.setState({
      direccion: e.target.value,
    });
  }
  cambioTelefono(e) {
    this.setState({
      telefono: e.target.value,
    });
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8000/api/usuario/" +
          cookies.get("nombre") +
          "/" +
          cookies.get("clave")
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          nombre: res.data.nombre,
          apellidos: res.data.apellidos,
          email: res.data.email,
          password: res.data.clave,
          estado: res.data.estado,
          sexo: res.data.sexo,
          direccion: res.data.direccion,
          telefono: res.data.telefono,
        });
      });
      if (!cookies.get("nombre")) {
        window.location.href = "/login";
      }
  }

  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("apellidos", { path: "/" });
    cookies.remove("clave", { path: "/" });
    swal({
      title:"COT",
      text:"Cierre de sesión correcto, volviendo a página de login",
      icon:"info",
      button:"Aceptar",              
    }).then(respuesta=>{
      if(respuesta){
        window.location.href = "/login";
      }
    })
  };

  actualizar(e) {
    e.preventDefault();
    const datos = {
      nombre: this.state.nombre,
      apellidos: this.state.apellidos,
      email: this.state.email,
      clave: this.state.password,
      estado: this.state.estado,
      sexo: this.state.sexo,
      direccion: this.state.direccion,
      telefono: this.state.telefono,
    };
    axios
      .put(
        "http://localhost:8000/api/usuario/" +
          cookies.get("nombre") +
          "/" +
          cookies.get("clave"),
        datos
      )
      .then((res) => {
        console.log("Editado");
        this.setState({
          nombre: res.data.nombre,
          apellidos: res.data.apellidos,
          email: res.data.email,
          password: res.data.clave,
          estado: res.data.estado,
          sexo: res.data.sexo,
          direccion: res.data.direccion,
          telefono: res.data.telefono,
        });
        cookies.set("clave", res.data.clave, { path: "/" });
        cookies.set("nombre", res.data.nombre, { path: "/" });
        cookies.set("apellidos", res.data.apellidos, { path: "/" });
        swal({
          title:"COT",
          text:"Registro editado correctamente, volviendo a página de inicio",
          icon:"success",
          button:"Aceptar",              
        }).then(respuesta=>{
          if(respuesta){
            window.location.href = "/";
          }
        })
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div>
          <nav
            class="navbar navbar-expand-lg navbar fixed-top bg-dark"
            id="mainNav"
          >
            <div class="container px-4 px-lg-5">
              <Link className="text-light" to="/">
                Volver a Página de Inicio
              </Link>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <button class="btn text-light" onClick={this.cerrarSesion}>
                      Cerrar Sesión
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Container id="main-container" className="d-grid h-100">
          <Form id="sign-in-form" className="text-center p-3 w-100 mt-5">
            <img
              className="mb-4 bootstrap-logo"
              src="https://images.squarespace-cdn.com/content/v1/5ed981494bfad460e4eeeae1/1591331946167-DMN2T43QG9AJCRUB039L/TECSUP+Logo.png"
              alt="Bootstrap 5"
              height={100}
            />
            <h1 className="mb-3 fs-3 fw-normal">Editar Usuario</h1>
            <Form.Group>
              <label class="form-label m-3">Usuario</label>
              <Form.Control
                type="text"
                size="lg"
                value={this.state.nombre}
                onChange={this.cambioNombre}
                placeholder="Nombre del usuario"
                className="position-relative"
                name="nombre"
                id="nombre"
                required
              />
            </Form.Group>
            <Form.Group>
              <label class="form-label m-3">Apellidos</label>
              <Form.Control
                type="text"
                size="lg"
                value={this.state.apellidos}
                onChange={this.cambioApellidos}
                placeholder="Apellidos"
                className="position-relative"
                name="apellidos"
                id="apellidos"
                required
              />
            </Form.Group>
            <Form.Group>
              <label class="form-label m-3">Email</label>
              <Form.Control
                type="email"
                size="lg"
                placeholder="Email"
                value={this.state.email}
                onChange={this.cambioEmail}
                className="position-relative"
                name="email"
                id="email"
                required
              />
            </Form.Group>
            <label class="form-label m-3">Password</label>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                size="lg"
                name="password"
                placeholder="Password"
                className="position-relative"
                value={this.state.password}
                onChange={this.cambioPassword}
                id="password"
                required
              />
            </Form.Group>
            <Form.Group>
              <label class="form-label m-3">Sexo</label>
              <Form.Select
                value={this.state.sexo}
                onChange={this.cambioSexo}
                name="sexo"
                className="position-relative"
              >
                <option value="M" name="M">
                  Masculino
                </option>
                <option value="F" name="F">
                  Femenino
                </option>
              </Form.Select>
            </Form.Group>

            <label class="form-label m-3">Direccion</label>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                size="lg"
                name="direccion"
                placeholder="Direccion"
                className="position-relative"
                value={this.state.direccion}
                onChange={this.cambioDireccion}
                id="direccion"
                required
              />
            </Form.Group>

            <label class="form-label m-3">Telefono</label>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                size="lg"
                name="telefono"
                placeholder="Telefono"
                className="position-relative"
                value={this.state.telefono}
                onChange={this.cambioTelefono}
                id="telefono"
                required
              />
            </Form.Group>
            <div className="d-grid mt-3">
              <Button variant="primary" size="lg" onClick={this.actualizar}>
                Actualizar
              </Button>
            </div>
            <p className="mt-5 text-muted">&copy; 2021-2022</p>
          </Form>
        </Container>
      </>
    );
  }
}
