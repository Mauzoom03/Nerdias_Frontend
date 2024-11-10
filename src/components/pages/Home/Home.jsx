import React from 'react'
import './_home.scss'
import NewsSlider from '../../layout/NewsSlider/NewsSlider';
import CoursesDinamicSlider from "../../layout/CursesDinamicSlider/CursesDinamicSlider";
import Footer from '../../layout/Footer/Footer';
const homeBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676007/Nerdias_App/MainBack_gnm68x.png";
function Home() {
  return (
    <div className="home_container">
      <div className="image_content">
        <h2 className="home_title">
          Comprehensive <span className="highlight">AI</span> Resources in One
          Location
        </h2>
        <img className="home_img" src={homeBackground} alt="homeBackground" />
      </div>

      <div className="newsSlider_container">
        <h1 className="title">
          Stay Updated with Our Latest{" "}
          <span className="highlightNews">News</span>
        </h1>

        <NewsSlider />
      </div>
      <div className="Percentages_container">
        <div className="Percentages">
          <div className="Percentage_item">
            <span className="pi pi-briefcase"></span>
            <h3 className="title_perc"> 75% </h3>
            <p> Adopción de IA en Empresas </p>
          </div>
        </div>
        <div className="Percentages">
          <div className="Percentage_item">
            <span className="pi pi-chart-bar"></span>
            <h3> 40% </h3>
            <p> Incremento en la Productividad </p>
          </div>
        </div>
        <div className="Percentages">
          <div className="Percentage_item">
            <span className="pi pi-shop"></span>
            <h3> 61% </h3>
            <p> Uso de IA en Marketing </p>
          </div>
        </div>
      </div>
      <div className="cursesSlider_container">
        <h1 className="titleCurses">
          Explore the Best <span className="highlight">AI</span> Courses and
          Resources in One Click
        </h1>
        <CoursesDinamicSlider />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
