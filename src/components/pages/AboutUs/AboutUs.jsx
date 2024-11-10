import React from 'react'
import "./_aboutUs.scss"
function AboutUs() {
  return (
    <div className="aboutUs_container">
      <div className="aboutUs">
        <div className="aboutUs-1">
          <p>
            Welcome to <span className="highlight">Nerdias</span>, the ultimate
            AI Web designed and developed by Mauro Quintana Hernández. As a
            passionate software developer, I embarked on this journey to create
            a centralized hub where AI enthusiasts, developers, and innovators
            can access, explore, and contribute to the latest advancements in
            artificial intelligence.
          </p>
        </div>
        <div className="aboutUs-2">
          <p>
            At <span className="highlight">Nerdias</span>, our mission is to
            democratize AI knowledge and resources, providing a collaborative
            platform that bridges the gap between cutting-edge technologies and
            the global developer community. We believe that innovation thrives
            through open collaboration, and by offering a space where people can
            share ideas, discuss the latest AI news, and discover the best
            courses, we aim to empower the next generation of AI creators.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs
