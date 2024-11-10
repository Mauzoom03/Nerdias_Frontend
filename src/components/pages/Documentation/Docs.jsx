import React from "react";
import "./_docs.scss";
const NerdiasBanner =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676011/Nerdias_App/Warner_and_Spencer_hjx3am.png";
const Communities_background =
  "https://res.cloudinary.com/duaztq3yf/image/upload/v1729676002/Nerdias_App/Background_tx5bs8.png";
function Docs() {
  const [loading, setLoading] = React.useState(true);

  
  return (
    <div className="docs_container">
      <div className="image_container">
        <img className="docs_img" src={NerdiasBanner} alt="Nerdias Banner" />
      </div>
      <div className="guides_container">
        <h1 className="guides_title">
          Guides For use the <span className="highlight">AI</span>{" "}
        </h1>
        <div className="details-container">
          <details>
            <summary>Introduction to Artificial Intelligence</summary>
            <p>
              Artificial Intelligence (AI) represents a significant leap forward
              in the capability of machines to mimic human-like intelligence.
              This section provides foundational insights into AI, explaining
              key concepts such as machine learning, neural networks, and
              natural language processing. Additionally, it explores the
              historical milestones that have driven AIs evolution and
              highlights fundamental principles. By understanding these basics,
              readers will gain a comprehensive perspective on how AI works, its
              main components, and its potential applications across various
              domains.
            </p>
          </details>
          <details>
            <summary>AI user Guides</summary>
            <p>
              This section serves as an in-depth guide for users seeking to
              harness the power of AI. It offers practical, step-by-step
              tutorials for deploying and interacting with AI systems, spanning
              topics such as setting up machine learning algorithms, fine-tuning
              models, and utilizing pre-built AI platforms. The guides are
              tailored for users of different experience levels, from novices to
              advanced practitioners, with additional resources and
              troubleshooting advice. Each guide aims to maximize user success
              with AI tools, helping to implement AI-driven solutions in a wide
              array of scenarios.
            </p>
          </details>
          <details>
            <summary>Real-Life Us Cases of AI </summary>
            <p>
              Artificial Intelligence is reshaping the landscape of numerous
              industries, providing innovative solutions to traditional
              challenges. In this section, you will find a comprehensive
              examination of AI applications across healthcare, finance, retail,
              logistics, and other sectors. Each use case includes an analysis
              of the specific AI techniques applied—such as predictive analytics
              in finance or image recognition in healthcare—demonstrating the
              benefits, limitations, and transformative effects AI brings to
              real-world problems. These examples highlight both current
              implementations and potential future advancements.
            </p>
          </details>
          <details>
            <summary>Trends and Advances in AI</summary>
            <p>
              The field of Artificial Intelligence is advancing at an
              unprecedented rate, with new technologies and methodologies
              emerging continuously. This section covers the latest trends,
              including advancements in deep learning, reinforcement learning,
              and edge AI, as well as breakthroughs in specialized areas like
              quantum AI and AI ethics. Readers will gain insight into ongoing
              research, innovative projects, and how these trends are shaping
              the direction of AI. Additionally, this section discusses the
              broader implications of AI advancements, such as regulatory
              challenges, ethical considerations, and the societal impact of
              increasingly autonomous systems.
            </p>
          </details>
        </div>
      </div>
      <div className="communities_container">
        <h1 className="communities_title">Communities</h1>
        <div className="community_cards">
          <div className="community_card discord">
            <h2>Join the Discord community!</h2>
            <p>An open space for AI enthusiasts.</p>
            <button className="join_button discord_button">
              <img
                src="https://res.cloudinary.com/duaztq3yf/image/upload/v1730659115/Nerdias_App/discord-icon_zs6jy2.svg"
                alt="Discord"
              />
              Únete a Discord
            </button>
          </div>
          <div className="community_card reddit">
            <h2>Use in Reddit</h2>
            <p>Platform with a large AI community.</p>
            <button className="join_button reddit_button">
              Únete a Reddit
            </button>
          </div>
        </div>
        <div className="repository_card">
          <div className="github_content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              className="github_icon"
            />
            <h2>
              <span className="highlight">Alverse</span> Repository
            </h2>
            <p>Explore the ultimate Open-Source AI library.</p>
            <div className="button-icon">
              <div className="icon">
                <svg viewBox="0 0 24 24">
                  <path
                    d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                    fill="#222229"
                  ></path>
                </svg>
              </div>
              <div className="cube">
                <span className="side front">Discover</span>
                <span className="side top">check it on github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Docs;
