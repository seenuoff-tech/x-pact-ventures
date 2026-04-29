/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <h1 style={{ position: 'fixed', top: 0, left: 0, zIndex: 9999, color: 'red' }}>TEST RENDER</h1>
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
      </div>
    </Router>
  );
}

