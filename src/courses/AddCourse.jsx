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
    status: "open"
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
            category_id: parseInt(formData.category_id)
            
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
    }catch (error) {
        console.error("Error response:", {
          status: error.response?.status,
          data: error.response?.data,
          headers: error.response?.headers,
        });
      }
  };

  return (
<div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
    Ajouter un cours
  </h2>

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
        <label className="block text-gray-700 font-medium mb-2">Catégorie (ID)</label>
        <input
          type="number"
          name="category_id"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.category_id}
          onChange={handleChange}
        />
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
    >
      Ajouter le cours
    </button>

    {success && (
      <p className="text-green-600 text-center font-medium mt-4">
        ✅ Cours ajouté avec succès !
      </p>
    )}
  </form>
</div>

  );
}

export default AddCourse;