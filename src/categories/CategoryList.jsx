import { useEffect, useState } from "react";
import { category } from "../services/api";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await category.getCategories();
        setCategories(response.data);
      } catch (error) {
        console.log("Erreur lors de la récupération des catégories :", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Catégories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((ct, index) => (
          <CategoryCard key={index} name={ct.name} index={index} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;