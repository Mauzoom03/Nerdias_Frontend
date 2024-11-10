import { API as axios } from "./axios";

export const getCoursesReq = () => axios.get("/courses/getCourses");

export const createCourseReq = (courseData) =>
  axios.post("/courses/createCourse", courseData, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteCourseReq = (courseId) =>
  axios.delete(`/courses/deleteCourse/${courseId}`);
