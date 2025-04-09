import { Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Youdemy</h1>

        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link to="/courses" className="hover:text-blue-600 transition">Courses</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-600 transition">Categories</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-600 transition">add category</Link>
            </li>
            <li>
              <Link to="/tags" className="hover:text-blue-600 transition">Tags</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
