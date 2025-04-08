import { useEffect, useState } from "react";
import {category} from "./services/api";

function Categories(){
const [categories, setCategories] = useState([]);

useEffect(() => {
try {
    const fetchCategories = async () => {
        const response = await category.getCategories();
        setCategories(response.data);
    }
    fetchCategories();
} catch (error) {
    console.log(error);
    
}
}, [])
    return(

<div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Liste des Catégories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((ct, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800">{ct.name}</h2>

          </div>
        ))}
      </div>
    </div>
    );
}

export default Categories;