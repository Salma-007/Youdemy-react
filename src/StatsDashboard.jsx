import { useState, useEffect } from 'react';
import { stats } from './services/api';

function StatsDashboard() {
  const [courseStats, setCourseStats] = useState({});
  const [categoryStats, setCategoryStats] = useState({});
  const [tagStats, setTagStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [courses, categories, tags] = await Promise.all([
          stats.getCourseStats(),
          stats.getCategoryStats(),
          stats.getTagStats()
        ]);

        setCourseStats(courses.data);
        setCategoryStats(categories.data);
        setTagStats(tags.data);
      } catch (error) {
        console.error("Erreur lors du chargement des stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Chargement des statistiques...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Statistiques Générales</h1>

      {/* Cours */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Total des cours" value={courseStats.total_courses} />
          <StatCard label="Cours débutant" value={courseStats.Beginner_courses} />
          <StatCard label="Cours intermédiaire" value={courseStats.Intermediate_courses} />
          <StatCard label="Cours avancé" value={courseStats.Advanced_courses} />
        </div>
      </section>

      {/* Catégories */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Catégories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="Total des catégories" value={categoryStats.total_categories} />
          <StatCard label="Catégories avec cours" value={categoryStats.categories_with_courses} />
        </div>
      </section>

      {/* Tags */}
      <section>
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">Tags</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard label="Total des tags" value={tagStats.total_tags} />
          <StatCard label="Tags avec cours" value={tagStats.tags_with_courses} />
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <p className="text-gray-600">{label}</p>
      <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  );
}

export default StatsDashboard;
