function CourseCard({ course, onDelete, isDeleting }) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h2>
            <button
              onClick={() => onDelete(course.id)}
              disabled={isDeleting}
              className="text-red-500 hover:text-red-700"
              title="Supprimer"
            >
              {isDeleting ? (
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
  
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