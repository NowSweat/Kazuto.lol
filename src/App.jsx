/* eslint-disable react/prop-types */
import "./css/App.css";
import Header from "./assets/Header";
import Cards from "./assets/Cards";
import Carousel from "./assets/Carousel";
export default function App() {
  return (
    <div className="container">
      <Header></Header>

      <div className="main">
        <h1>Kazuto</h1>
        <p>
          <span>Kazuto</span> es un bot de <i className="fa-brands fa-discord"></i> <span>Discord</span> que se especializa en la música aunque tiene
          varias otras funcionalidades
        </p>
      </div>
      <div className="containCards">
        <Cards></Cards>
      </div>
      <Carousel></Carousel>
    </div>
  );
}
