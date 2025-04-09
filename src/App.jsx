// import Categories from './Categories.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import CategoryList from './categories/CategoryList.jsx';
import TagList from './tags/TagList.jsx';
import CourseList from './courses/CourseList.jsx';
import AddCategory from './courses/AddCategory.jsx';
import './App.css';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/categories" element={<CategoryList />} /> 
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/tags" element={<TagList />} /> 
      <Route path="/courses" element={<CourseList />} />
      </Routes>
  </Router>
  );
}

export default App
