import React, { useEffect, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { getFilteredProductsReq } from '../../../../api/axios/products';
function AnalysisTools() {
 const [analysis, setAnalysis] = useState({
    sentiment: [],
    dataMining: [],
    dataVisualizer: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false); // Estado para controlar la visibilidad del Dialog
  const [selectedItem, setSelectedItem] = useState(null); // Estado para almacenar el ítem seleccionado

  const validateItems = (items) => {
    return (
      Array.isArray(items) &&
      items.every((item) => item._id && item.name && item.image)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [sentimentAnalysis, dataMiningTools, dataVisualizer] =
          await Promise.all([
            getFilteredProductsReq("Analysis Tools", "Sentiment Analysis"),
            getFilteredProductsReq("Analysis Tools", "Data Mining Tools"),
            getFilteredProductsReq("Analysis Tools", "Data Visualizer"),
          ]);

        setAnalysis({
          sentiment: validateItems(sentimentAnalysis.data) ? sentimentAnalysis.data : [],
          dataMining: validateItems(dataMiningTools.data) ? dataMiningTools.data : [],
          dataVisualizer: validateItems(dataVisualizer.data)
            ? dataVisualizer.data
            : [],
        });
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1 className="title">Analysis Tools</h1>
      <Slider
        title="Sentiment Analysis"
        items={analysis.sentiment}
        setVisible={setVisible}
        setSelectedItem={setSelectedItem}
      />
      <Slider
        title="Data Mining Tools"
        items={analysis.dataMining}
        setVisible={setVisible}
        setSelectedItem={setSelectedItem}
      />
      <Slider
        title="Data Visualizer"
        items={analysis.dataVisualizer}
        setVisible={setVisible}
        setSelectedItem={setSelectedItem}
      />

      <Dialog
        header={selectedItem?.name}
        visible={visible}
        style={{
          width: "50vw",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">{selectedItem?.description} </p>
      </Dialog>
    </div>
  );
};

// Componente Slider
const Slider = React.memo(function SliderComponent({
  title,
  items,
  setVisible,
  setSelectedItem,
}) {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const toggleBookmark = (itemId) => {
    setBookmarkedItems((prevBookmarks) =>
      prevBookmarks.includes(itemId)
        ? prevBookmarks.filter((id) => id !== itemId)
        : [...prevBookmarks, itemId]
    );
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>
      <div className="slider">
        {items.length > 0 ? (
          items.map((item) => (
            <div className="content-card" key={item._id}>
              <div className="slider-card">
                <img
                  className="slider-image"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="card-content">
                <button
                  className="try-now-button"
                  onClick={() => window.open(item.link, "_blank")}
                >
                  Probar ahora
                </button>
                <div
                  className={`bookmark-icon ${
                    bookmarkedItems.includes(item._id) ? "bookmarked" : ""
                  }`}
                  onClick={() => toggleBookmark(item._id)}
                >
                  <span className="pi pi-bookmark"></span>
                </div>
                <div
                  className="info-icon"
                  onClick={() => {
                    setSelectedItem(item);
                    setVisible(true);
                  }}
                >
                  <span className="pi pi-info-circle"></span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No items available</div>
        )}
      </div>
    </div>
  );
});


export default AnalysisTools
