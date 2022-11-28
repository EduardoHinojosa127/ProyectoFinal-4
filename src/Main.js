import Cookies from "universal-cookie";
import { Almacen } from "./main_page/Almacen";
import { Epps } from "./main_page/Epps";
import { Footer } from "./main_page/Footer";
import { NavBar } from "./main_page/NavBar";

const cookies = new Cookies();
export default function Main() {
  console.log(cookies.get("id"));
  console.log(cookies.get("nombre"));
  console.log(cookies.get("clave"));
  return (
    <body id="page-top">
      <NavBar/>
      <div className="wrapper">
        <header class="masthead">
          
          <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            
            <div class="d-flex justify-content-center">
              <div class="text-center">
                <h1 class="mx-auto my-0 text-uppercase">COT</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">
                  Contoller Tempertature Optimized
                </h2>
                <a class="btn btn-primary" href="#about">
                  Comencemos
                </a>
              </div>
            </div>
          </div>
        </header>
        <section class="about-section text-center" id="about">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8">
                <h2 class="text-white mb-4">Sobre el proyecto</h2>
                <p class="text-white-50">
                  Nuestro proyecto desarrollado es el resultado del interes nacional y necesidad publica la seguridad
                  alimentaria y nutricional de la poblacion en el sector minero.
                  La propuesta del proyecto contiene la visión, los objetivos y las estrategias, con la finalidad de garantizar la 
                  seguridad alimentaria y nutricional, nos enfocamos en entender, controlar y comunicar las precauciones que se tienen con respecto
                  a los alimentos almacenados.
                </p>
              </div>
            </div>
            <img class="img-fluid" src="https://tecnologiaparalaindustria.com/wp-content/uploads/2020/09/Gestion-de-la-seguridad-electrica-en-las-minas.png" alt="..." />
          </div>
        </section>
        <Epps />
        <Almacen />
        <Footer />
      </div>
    </body>
  );
}
