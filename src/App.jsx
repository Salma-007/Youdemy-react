import Categories from './Categories.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/categories" element={<Categories />} />
      </Routes>
  </Router>
  );
}

export default App
