import { useState } from "react";
import { course } from "../services/api";

function AddCourse() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    duration: "",
    level: "beginner",
    price: "",
    category_id: "",
  });

  const [success, setSuccess] = useState(false);

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
        category_id: formData.category_id ? parseInt(formData.category_id) : null
      };

      console.log("Données à envoyer:", dataToSend); 

      const response = await course.createCourse(dataToSend);
      console.log("Cours ajouté :", response.data);
      setSuccess(true);
      setFormData({
        name: "",
        description: "",
        duration: "",
        level: "beginner",
        price: "",
        category_id: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Ajouter un cours</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Nom du cours</label>
          <input
            type="text"
            name="name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            className="w-full border p-2 rounded"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Durée (minutes)</label>
            <input
              type="number"
              name="duration"
              className="w-full border p-2 rounded"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Niveau</label>
            <select
              name="level"
              className="w-full border p-2 rounded"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Statut</label>
            <select
              name="status"
              className="w-full border p-2 rounded"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="open">open</option>
              <option value="in_progress">In progress</option>
              <option value="done">done</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Prix (€)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              className="w-full border p-2 rounded"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Catégorie (ID)</label>
            <input
              type="number"
              name="category_id"
              className="w-full border p-2 rounded"
              value={formData.category_id}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Ajouter le cours
        </button>

        {success && (
          <p className="text-green-600 text-center mt-4">
            Cours ajouté avec succès !
          </p>
        )}
      </form>
    </div>
  );
}

export default AddCourse;