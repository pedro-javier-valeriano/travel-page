import logo from './logo.svg';
import './index.css';
import { Fragment } from 'react';
import Enlaces from './enlaces';

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
        <img src="images/images1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/images1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="./logo192.png" className="d-block w-100" alt="..."/>
    </div>
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
  </Fragment>
)
  
export default App;
