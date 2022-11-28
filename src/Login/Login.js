import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

const cookie = new Cookies();

export default class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };
  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form);
  };
  iniciarSesion = async () => {
    await axios
      .get(
        "http://localhost:8000/api/usuario/" +
          this.state.form.username +
          "/" +
          this.state.form.password
      )
      .then((response) => {
        console.log(response.data);
        var respuesta = response.data;
        cookie.set("id", respuesta.id, { path: "/" });
        cookie.set("clave", respuesta.clave, { path: "/" });
        cookie.set("nombre", respuesta.nombre, { path: "/" });
        cookie.set("apellidos", respuesta.apellidos, { path: "/" });
        swal({
          title:"COT",
          text:"Inicio de sesión correcto, yendo a página de inicio",
          icon:"success",
          button:"Aceptar",              
        }).then(respuesta=>{
          if(respuesta){
            window.location.href = "/";
          }
        })
      })
      .catch(error=>{
        console.log(error)
        swal({
          title:"COT",
          text:"Error en las credendiales proporcionadas",
          icon:"error",
          button:"Aceptar",              
        }).then(respuesta=>{
          if(respuesta){
            window.location.href = "/login";
          }
        })
      });
  };
  componentDidMount(){
    if(cookie.get('nombre')){
        window.location.href = "/";
    }
  }

  render() {
    return (
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100">
          <img
            className="mb-4 bootstrap-logo"
            src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
            alt="Bootstrap 5"
            height={150}
          />
          <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
          <Form.Group controlId="sign-in-email-address">
            <label class="form-label m-3" for="username">Usuario</label>
            
            <Form.Control
              type="email"
              size="lg"
              placeholder="Email address"
              autoComplete="username"
              className="position-relative"
              onChange={this.handleChange}
              name="username"
              id="username"
            />
          </Form.Group>
          <label class="form-label m-3" for="password">Password</label>
          <Form.Group className="mb-3" controlId="sign-in-password">
            <Form.Control
              type="password"
              size="lg"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              className="position-relative"
              onChange={this.handleChange}
              id="password"
            />
          </Form.Group>
          <Link to="/register">¿No tiene cuenta?</Link>
          <div className="d-grid mt-3">
            <Button variant="primary" size="lg" onClick={this.iniciarSesion}>
              Sign in
            </Button>
          </div>
          <p className="mt-5 text-muted">&copy; 2021-2022</p>
        </Form>
      </Container>
    );
  }
}
