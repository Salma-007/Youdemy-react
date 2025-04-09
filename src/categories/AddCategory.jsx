import { useState } from "react";
import { category } from "../services/api"; 

function AddCategory() {
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(null); // Ajoutez cet état
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await category.createCategory({ name, parent_id: parentId });
      console.log("Catégorie ajoutée :", response.data);
      setSuccess(true);
      setName("");
      setParentId(null);
    } catch (error) {
      console.error("Erreur lors de l'ajout :", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ajouter une catégorie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Nom de la catégorie</label>
          <input
            type="text"
            className="w-full border p-2 rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>


        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ajouter
        </button>

        {success && <p className="text-green-600 mt-2">Catégorie ajoutée avec succès !</p>}
      </form>
    </div>
  );
}

export default AddCategory;