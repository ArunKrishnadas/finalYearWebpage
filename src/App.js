import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BrainMLPage from './Components/BrainMLPage';
import PneumoniaMLPage from './Components/PneumoniaMLPage';
import CKDMLPage from './Components/CKDMLPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-md p-4 border-b-4 border-blue-600">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-800">Assistia : Medical Diagnostic Portal</h1>
              {/* abhishek pls remove remove this after you intergrate the model and functionality */}
              <div className="flex space-x-8">
                <Link to="/brain" className="text-gray-700 hover:text-blue-600 font-medium">Brain Analysis</Link>
                <Link to="/pneumonia" className="text-gray-700 hover:text-blue-600 font-medium">Chest X-Ray Analysis</Link>
                <Link to="/ckd" className="text-gray-700 hover:text-blue-600 font-medium">Kidney Function Analysis</Link>
              </div>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/brain" element={<BrainMLPage />} />
            <Route path="/pneumonia" element={<PneumoniaMLPage />} />
            <Route path="/ckd" element={<CKDMLPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;