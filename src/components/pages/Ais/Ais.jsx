import React from "react";
import "./_ais.scss";

const ContentGenBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676003/Nerdias_App/generate_dq3i9s.png";
const AnalysisToolsBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676001/Nerdias_App/analysis_tools_t2ehbf.png";
const VirtualAssistantsBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676010/Nerdias_App/VirtualAssistans_wibzmj.png";
const MachineLearningPlatformsBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676006/Nerdias_App/MachineLearning_pqyexb.png";
const AIInnovationsBackground =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676005/Nerdias_App/innovayions_h9rc3u.png";

function Ais() {
  const cards = [
    {
      id: 1,
      title: "Content Generators",
      background: ContentGenBackground,
      link: "/content-generators",
    },
    {
      id: 2,
      title: "Analysis Tools",
      background: AnalysisToolsBackground,
      link: "/analysis-tools",
    },
    {
      id: 3,
      title: "Virtual Assistants",
      background: VirtualAssistantsBackground,
      link: "/virtual-assistants",
    },
    {
      id: 4,
      title: "Machine Learning Platforms",
      background: MachineLearningPlatformsBackground,
      link: "/machine-learning-platforms",
    },
    {
      id: 5,
      title: "AI Innovations",
      background: AIInnovationsBackground,
      link: "/ai-innovations",
    },
  ];

  return (
    <div className="ais-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h3 className="card-title">{card.title}</h3>
          <a
            href={card.link}
            className="card-link"
            style={{
              backgroundImage: `url(${card.background})`,
            }}
          ></a>
        </div>
      ))}
    </div>
  );
}

export default Ais;
