import logo from './logo.svg';
import './index.css';
import { Fragment } from 'react';
import Enlaces from './enlaces';
import Fotos from './fotos';
import Sanidad from './sanidad';

const App = () => (
  <Fragment>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <Enlaces title="inicio"/>
      <Enlaces title="Destinos"/>
      <Enlaces title="Ubicacion"/>
      <Enlaces />
      <Enlaces />
      <Enlaces />

     
    </ul>
    
  </div>
</nav>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
  <div className="carousel-item active">
         <img src="./images/imagen1.jpg" className="d-block w-100" alt="cusco01"/>
   </div>
      <Fotos title="cusco1" image="./images/imagen4.jpg"/> 
      <Fotos title="puno1" image= "./images/grupomercedez1.jpg"/> 

      
  </div>
</div>
 

    <div class="container">
        <div class="row">
          <div class="col text-center text-uppercase">
            <small>Conoce</small>
            <h2>Nuestros destinos</h2>
            <p>▼</p>
          </div>
        </div>
    </div>
 
 <section id="place-time">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-lg-6 pl-0 pr-0">
            <img src="./images/imagen2 (2).jpg" alt="Place" />
          </div>
          <div className="col text-left mt-2 pb-4">
            <h2>Cusco</h2>
            <p className="lead">
            Sicuani es una ciudad del sureste del Perú. Es la segunda localidad de mayor importancia a nivel poblacional del Departamento del Cusco, contando con una población estimada de 53 672 habitantes para el año 2015.1​ Es la capital de la provincia de Canchis desde el 29 de agosto de 1834. Sicuani se encuentra ubicada en el distrito del mismo nombre, el cual, además de esta ciudad, está formado por 30 comunidades campesinas, en su entorno rural
            </p>
            <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=<+51 930999510&text=https://api.whatsapp.com/send?phone=<+51 930999510&text=Hola%20lirio%20Esto%20es%20una%20prueba :)">Viajar »</a>
          </div>
        </div>
      </div>
    </section> 
    <section id="place-time">
      <div className="container-fluid">
        <div className="row">
        <div className="col text-left mt-2 pb-4">
            <h2>Puno</h2>
            <p className="lead">
            Sicuani es una ciudad del sureste del Perú. Es la segunda localidad de mayor importancia a nivel poblacional del Departamento del Cusco, contando con una población estimada de 53 672 habitantes para el año 2015.1​ Es la capital de la provincia de Canchis desde el 29 de agosto de 1834. Sicuani se encuentra ubicada en el distrito del mismo nombre, el cual, además de esta ciudad, está formado por 30 comunidades campesinas, en su entorno rural
            </p>
            <a className="btn btn-primary" href="https://api.whatsapp.com/send?phone=<+51 930999510&text=Hola%20lirio%20Esto%20es%20una%20prueba :)">Viajar »</a>
            
          </div>
          <div className="col-xs-12 col-lg-6 pl-0 pr-0">
            <img src="./images/imagen3.jpg" alt="Place" />
          </div>
        
        </div>
      </div>
    </section>   
    
    

    <footer>
    <div className="container">
        <div className="row">
          <div className="col">
              <a href="#"> preguntas frecuentes</a>
          </div>
        </div>
    </div>
 </footer> 
  </Fragment>
)
  
export default App;
