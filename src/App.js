import logo from './logo.svg';
import './index.css';
import { Fragment } from 'react';
import Enlaces from './enlaces';
import Fotos from './fotos';

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
      <Fotos title="cusco1" image="./images/imagen2.jpg"/> 
      <Fotos title="puno1" image= "./images/imagen3.jpg"/> 

      <Fotos title="puno" image= "./images/imagen4.jpg"/> 
  </div>
</div>
 <footer>
    <div className="container">
        <div className="row">
          <div className="col">
              <a href="#"> preguntas frecuentes</a>
          </div>
        </div>
    </div>
 </footer>

 <div class="container">
        <div class="row">
          <div class="col text-center text-uppercase">
            <small>Conoce a los</small>
            <h2>Los oradores</h2>
          </div>
        </div>
      </div>
  </Fragment>
)
  
export default App;
