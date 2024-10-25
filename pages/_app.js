import '../styles/globals.css'

import React, { useState } from 'react';
import Layout from '../components/layout.jsx';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import About from './about.js';
import Background from '../components/background-wave.jsx';

const App = () => {
  const [content, setContent] = useState(<Portfolio />); // Default to Portfolio

  const changeContent = (page) => {
    switch (page) {
      case 'contact':
        setContent(<Contact />);
        break;
      case 'about':
        setContent(<About />);
        break;
      default:
        setContent(<Portfolio />);
    }
  };

  return (
    <div>
    <Background/>
    <Layout>
      {{ content, changeContent }}
    </Layout>
    </div>
  );
};

export default App;

