import React, { useEffect, useState } from "react";
import "./_newsSlider.scss";
import { Galleria } from "primereact/galleria";
import { getApiNewsReq } from "../../../api/axios/news";
const defaultNewImage =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1730031539/Nerdias_App/AIpng_biqbum.png";

function NewsSlider() {
  const [images, setImages] = useState([]); // Estado para almacenar las noticias

  useEffect(() => {
    // Función para obtener noticias de la API
    const fetchNews = async () => {
      try {
        const response = await getApiNewsReq();
        setImages(response.data); // Asigna los datos obtenidos al estado
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };

    fetchNews();
  }, []);

  // Función para validar la URL de la imagen
  const isValidImageUrl = (url) => {
    return url && (url.startsWith("http://") || url.startsWith("https://"));
  };

  // Función para manejar la carga de imágenes
  const handleImageError = (event) => {
    event.target.src = defaultNewImage; 
  };

  const itemTemplate = (item) => {
    return (
      <div className="news-item">
        <img
          src={
            isValidImageUrl(item.urlToImage) ? item.urlToImage : defaultNewImage
          }
          alt={item.title || "Noticia sin título"}
          onError={handleImageError}
        />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Published: {item.publishedAt}</p>
        <button className="animated-button" onClick={() => window.open(item.url)}>
          <svg
            viewBox="0 0 24 24"
            className="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span className="text">See more</span>
          <span className="circle"></span>
          <svg
            viewBox="0 0 24 24"
            className="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </div>
    );
  };

  // Plantilla para las miniaturas
  const thumbnailTemplate = (item) => {
    return (
      <img
        src={
          isValidImageUrl(item.urlToImage) ? item.urlToImage : defaultNewImage
        }
        alt={item.title || "Noticia sin título"}
        onError={handleImageError} 
      />
    );
  };

  if (!images || images.length === 0) {
    return <p>No hay noticias disponibles.</p>;
  }

  return (
    <div className="newsSlider_container">
      <div className="newsSlider">
        <Galleria
          value={images}
          numVisible={15}
          circular
          style={{
            width: "660px",
            margin: "0 auto",
            height: "400px",
            objectFit: "cover",
          }}
          showItemNavigators
          showThumbnails={false}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
        />
      </div>
    </div>
  );
}

export default NewsSlider;
