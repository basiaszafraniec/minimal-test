import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import React, { useState } from 'react';
import Layout from '../components/layout.jsx';
import Portfolio from './portfolio.js';
import Contact from './contact.js';
import About from './about.js';
import Background from './background-wave.js';

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

