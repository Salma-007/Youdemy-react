
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { course } from "../services/api";

function CourseDetail() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await course.getCourse(id);
        console.log("🎯 Course data:", response.data); 
        setCourseData(response.data);
      } catch (error) {
        console.error("Erreur chargement du cours :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="text-center py-10">Chargement...</div>;
  if (!courseData) return <div className="text-center py-10">Cours introuvable.</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white rounded shadow mt-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{courseData.name}</h1>
      <p className="text-gray-600 mb-4">{courseData.description}</p>
      
      <div className="flex flex-wrap gap-4 text-sm mb-6">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{courseData.level}</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">{courseData.duration} min</span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">{courseData.price} €</span>
        <span className={`px-2 py-1 rounded ${
          courseData.status === 'open' ? 'bg-green-100 text-green-800' :
          courseData.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {courseData.status.replace('_', ' ')}
        </span>
      </div>

    <div className="mb-2">
        <h2 className="text-lg font-semibold text-gray-700">Catégorie :</h2>
        <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-sm mt-1">
        {courseData.category_name}
        </span>
    </div>


    </div>
  );
}

export default CourseDetail;
