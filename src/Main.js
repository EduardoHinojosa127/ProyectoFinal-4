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
                <h1 class="mx-auto my-0 text-uppercase">Grayscale</h1>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">
                  A free, responsive, one Bootstrap theme created by Start
                  Bootstrap.
                </h2>
                <a class="btn btn-primary" href="#about">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </header>
        <section class="about-section text-center" id="about">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8">
                <h2 class="text-white mb-4">Built with Bootstrap 5</h2>
                <p class="text-white-50">
                  Grayscale is a free Bootstrap theme created by Start
                  Bootstrap. It can be yours right now, simply download the
                  template on
                  <a href="https://startbootstrap.com/theme/grayscale/">
                    the preview page.
                  </a>
                  The theme is open source, and you can use it for any purpose,
                  personal or commercial.
                </p>
              </div>
            </div>
            <img class="img-fluid" src="assets/img/ipad.png" alt="..." />
          </div>
        </section>
        <Epps />
        <Almacen />
        <Footer />
      </div>
    </body>
  );
}
