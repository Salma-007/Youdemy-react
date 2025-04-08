import { useEffect, useState } from "react";
import { tag } from "../services/api"; 
import TagCard from "./TagCard";

function TagList() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await tag.getTags();
        setTags(response.data);
      } catch (error) {
        console.log("Erreur lors de la récupération des tags :", error);
      }
    };
    fetchTags();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
         Tags
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tags.map((tag, index) => (
          <TagCard key={index} tag={tag} index={index} />
        ))}
      </div>
    </div>
  );
}

export default TagList;