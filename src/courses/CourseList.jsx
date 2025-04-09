import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { course } from "../services/api";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await course.getCourses();
        console.log(response.data); 
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur récupération des cours :", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="py-10 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Tous les Cours 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
