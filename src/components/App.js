import React from 'react';
import Books from './Books';
import Authors from './Authors';
import Footer from './Footer';

const App = () => (
  <div>
    <div className="panel">
      <Authors/>
    </div>

    <div className="panel">
      <Books/>
    </div>

    <Footer/>
  </div>
);

export default App;