// import Categories from './Categories.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import CategoryList from './categories/CategoryList.jsx';
import TagList from './tags/TagList.jsx';
import CourseList from './courses/CourseList.jsx';
import AddCategory from './categories/AddCategory.jsx';
import AddCourse from './courses/AddCourse.jsx';
import './App.css';
import StatsDashboard from './StatsDashboard.jsx';
import EditCourse from './courses/EditCourse.jsx';
import CourseDetail from './courses/CourseDetail.jsx';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<StatsDashboard />} />
      <Route path="/stats" element={<StatsDashboard />} />
      <Route path="/categories" element={<CategoryList />} /> 
      <Route path="/categories/add" element={<AddCategory />} />
      <Route path="/tags" element={<TagList />} /> 
      <Route path="/courses" element={<CourseList />} />
      <Route path="/courses/:id" element={<CourseDetail />} />
      <Route path="/courses/add" element={<AddCourse />} />
      <Route path="/courses/edit/:id" element={<EditCourse />} />
      </Routes>
  </Router>
  );
}

export default App
