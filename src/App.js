import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ReactWindow from './components/ReactWindow';

// Lazy load components
const Home = lazy(() => import('./codesplittinglazyreactrouterdom/Home'));
const About = lazy(() => import('./codesplittinglazyreactrouterdom/About'));
const Contact = lazy(() => import('./codesplittinglazyreactrouterdom/Contact'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/reactwindow">React Window</Link>
            </li>
          </ul>
        </nav>

        {/* Suspense is used to wrap lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reactwindow" element={<ReactWindow />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
