import React, { useEffect, useState } from 'react'
import './_cursesDinamicSlider.scss'
import { getCoursesReq } from "../../../api/axios/courses";
function CursesDinamicSlider() {
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCoursesReq();
        setCourses(response.data);
      } catch (error) {
        console.error("Error al obtener cursos:", error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <div className="slider-container">
        <div className="slider-track">
          {[...courses, ...courses].map((course, index) => (
            <div
              key={index}
              className="course-item"
              onClick={() => window.open(course.link, "_blank")}
            >
              <img src={course.image} alt={course.name} />
              <h3>{course.name}</h3>
              <p>{course.academy}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CursesDinamicSlider
