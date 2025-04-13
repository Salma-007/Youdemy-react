import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { course, category } from "../services/api";

function EditCourse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        duration: "",
        level: "beginner",
        price: "",
        category_id: "",
        status: "open",
        sub_category_id: "",
        tags: []
    });

    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchCourse = async () => {
            try {

                const categoriesResponse = await category.getCategories();
                setCategories(categoriesResponse.data);

                const response = await course.getCourse(id);
                console.log("Fetched course:", response.data);

                setFormData({
                    ...response.data,
                    duration: response.data.duration.toString(),
                    price: response.data.price !== undefined ? response.data.price.toString() : "0.0",
                    category_id: response.data.category_id?.toString() || "",
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching course:", error);
                navigate("/courses");
            }
        };

        fetchCourse();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataToSend = {
                ...formData,
                duration: parseInt(formData.duration),
                price: parseFloat(formData.price),
                category_id: formData.category_id ? parseInt(formData.category_id) : null,
                sub_category_id: formData.sub_category_id ? parseInt(formData.sub_category_id) : null,
                tags: formData.tags || []
            };

            await course.updateCourse(id, dataToSend);
            setSuccess(true);
            setTimeout(() => navigate("/courses"), 1500);
        } catch (error) {
            console.error("Update error:", error.response?.data);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
<div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
    Modifier le cours
  </h2>

  {error && (
  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
    <p>{error}</p>
    {error.response?.data?.errors && (
      <ul className="list-disc pl-5 mt-2">
        {Object.entries(error.response.data.errors).map(([field, errors]) => (
          <li key={field}>{errors.join(', ')}</li>
        ))}
      </ul>
    )}
  </div>
)}

  <form onSubmit={handleSubmit} className="space-y-6">

    <div>
      <label className="block text-gray-700 font-medium mb-2">Nom du cours</label>
      <input
        type="text"
        name="name"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">Description</label>
      <textarea
        name="description"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formData.description}
        onChange={handleChange}
        required
        rows="4"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <label className="block text-gray-700 font-medium mb-2">Durée (minutes)</label>
        <input
          type="number"
          name="duration"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Prix (€)</label>
        <input
          type="number"
          step="0.01"
          name="price"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Niveau</label>
        <select
          name="level"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.level}
          onChange={handleChange}
          required
        >
          <option value="beginner">Débutant</option>
          <option value="intermediate">Intermédiaire</option>
          <option value="advanced">Avancé</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Statut</label>
        <select
          name="status"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="open">Ouvert</option>
          <option value="in_progress">En cours</option>
          <option value="done">Terminé</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Catégorie</label>
        <select
          name="category_id"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.category_id}
          onChange={handleChange}
        >
          <option value="">-- Choisir une catégorie --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
    >
      Mettre à jour le cours
    </button>

    {success && (
      <p className="text-green-600 text-center font-medium mt-4">
        ✅ Cours mis à jour avec succès !
      </p>
    )}
  </form>
</div>

    );
}

export default EditCourse;