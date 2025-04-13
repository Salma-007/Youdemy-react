import { Link } from 'react-router-dom';

function CourseCard({ course, onDelete, isDeleting }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/courses/${course.id}`}>
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              course.status === 'open' ? 'bg-green-100 text-green-800' :
              course.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {course.status.replace('_', ' ')}
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {course.level}
            </span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
              {course.duration} min
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
              {course.price} €
            </span>
          </div>
        </div>
      </Link>

      {/* Boutons Modifier / Supprimer (restent en dehors du lien) */}
      <div className="px-6 pb-6 flex space-x-2">
        <Link
          to={`/courses/edit/${course.id}`}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded text-center transition flex items-center justify-center"
          title="Modifier ce cours"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Modifier
        </Link>
        
        <button
          onClick={() => onDelete(course.id)}
          disabled={isDeleting}
          className={`flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition flex items-center justify-center ${
            isDeleting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          title="Supprimer ce cours"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          {isDeleting ? 'Suppression...' : 'Supprimer'}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
