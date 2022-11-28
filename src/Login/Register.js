import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      usuarios: [],
      pos: null,
      nombre: "",
      apellidos: "",
      email: "",
      clave: "",
      estado: "A",
      sexo: "",
      direccion: "",
      telefono:"",
      cargo_id:1
    })
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioApellidos = this.cambioApellidos.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioClave = this.cambioClave.bind(this);
    this.cambioSexo = this.cambioSexo.bind(this);
    this.cambioDireccion = this.cambioDireccion.bind(this);
    this.cambioTelefono = this.cambioTelefono.bind(this);
    this.guardar = this.guardar.bind(this);
  }
  cambioNombre(e){
    this.setState({
      nombre: e.target.value
    })
    console.log(this.state.nombre)
  }
  cambioApellidos(e){
    this.setState({
      apellidos: e.target.value
    })
  }
  cambioEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  cambioClave(e){
    this.setState({
      clave: e.target.value
    })
  }
  cambioSexo(e){
    this.setState({
      sexo: e.target.value
    })
  }
  cambioDireccion(e){
    this.setState({
      direccion: e.target.value
    })
  }
  cambioTelefono(e){
    this.setState({
      telefono: e.target.value
    })
  }

  guardar(e){
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
        cargo_id: this.state.cargo_id
    }
    var valorNuevo= {...this.state}
    axios.post('http://localhost:8000/api/usuarios',valorNuevo)
      .then(res => {
        console.log("Correcto")
        swal({
          title:"COT",
          text:"Usuario registrado correctamente, yendo a Login",
          icon:"success",
          button:"Aceptar",              
        }).then(respuesta=>{
          if(respuesta){
            window.location.href = "/login";
          }
        })
      }).catch((error)=>{
        console.log(error);
        swal({
          title:"COT",
          text:"Error en el registro del usuario",
          icon:"error",
          button:"Aceptar",              
        }).then(respuesta=>{
          if(respuesta){
            window.location.href = "/register";
          }
        })
      })
  }

  render() {
    return (
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100">
          <img
            className="mb-4 bootstrap-logo"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="Bootstrap 5"
            height={50}
          />
          <h1 className="mb-3 fs-3 fw-normal">Página de Registro</h1>
          <Form.Group>
            <label class="form-label m-3">Usuario</label>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Nombre del usuario"
              className="position-relative"
              onChange={this.cambioNombre}
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
              placeholder="Apellidos"
              className="position-relative"
              onChange={this.cambioApellidos}
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
              className="position-relative"
              onChange={this.cambioEmail}
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
              name="clave"
              placeholder="Password"
              className="position-relative"
              onChange={this.cambioClave}
              id="clave"
              required
            />
          </Form.Group>
          <Form.Group>
            <label class="form-label m-3">Sexo</label>
            <Form.Select
              name="sexo"
              value={this.state.sexo}
              className="position-relative"
              onChange={this.cambioSexo}
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
              onChange={this.cambioTelefono}
              id="telefono"
              required
            />
          </Form.Group>
          <Link to="/login">¿Ya tiene cuenta?</Link>
          <div className="d-grid mt-3">
            <Button variant="primary" size="lg" onClick={this.guardar}>
              Registrarse
            </Button>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022</p>
        </Form>
      </Container>
    );
  }
}
