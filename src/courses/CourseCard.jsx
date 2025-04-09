function CourseCard({ course }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h2>
  
          <p className="text-sm text-gray-500 mb-1">
             <span className="text-gray-700 font-medium">{course.category?.name}</span>
          </p>
  
          <p className="text-sm text-gray-500 mb-1">
            <span className="text-gray-700">{course.duration} min</span>
          </p>
  
          <p className="text-sm text-gray-500 mb-1">
             <span className="text-gray-700">{course.level}</span>
          </p>
  
          <p className="text-sm text-gray-500 mb-1">
             <span className="text-gray-700">{course.price} €</span>
          </p>
  
          <p className="text-gray-600 mt-3 text-sm">
            {course.description?.slice(0, 100)}...
          </p>
  

        </div>
      </div>
    );
  }
  
  export default CourseCard;
  