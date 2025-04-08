function TagCard({ name, index }) {
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-400">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          {name}
        </h2>
        <p className="text-sm text-gray-500">
          Tag {index + 1}
        </p>
      </div>
    );
  }
  
  export default TagCard;