import { useEffect, useState } from "react";
import { course } from "../services/api";
import CourseCard from "./CourseCard";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await course.getCourses();
        setCourses(response.data);
      } catch (error) {
        console.error("Erreur récupération des cours :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce cours ?")) {
      setDeletingId(id);
      try {
        await course.deleteCourse(id);
        setCourses(courses.filter(c => c.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
      } finally {
        setDeletingId(null);
      }
    }
  };

  if (loading) return <div className="text-center py-10">Chargement...</div>;

  return (
    <div className="py-10 px-6 bg-red-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Tous les Cours 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {courses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onDelete={handleDelete}
            isDeleting={deletingId === course.id}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseList;