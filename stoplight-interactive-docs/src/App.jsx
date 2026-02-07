import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import ApiReferencePage from './pages/ApiReferencePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="app-nav">
          <NavLink to="/" className="nav-brand">
            Doodle Docs
          </NavLink>
          <div className="nav-links">
            <NavLink to="/tutorials">Tutorials</NavLink>
            <NavLink to="/api-reference">API Reference</NavLink>
          </div>
        </nav>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/api-reference" element={<ApiReferencePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
