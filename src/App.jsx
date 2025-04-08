// import Categories from './Categories.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'
import CategoryList from './categories/CategoryList.jsx';
import TagList from './tags/TagList.jsx';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/categories" element={<CategoryList />} /> 
      <Route path="/tags" element={<TagList />} /> 
      </Routes>
  </Router>
  );
}

export default App
