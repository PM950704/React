import React, { Component } from 'react';
import Header from './funcComp/Header';
import Footer from './funcComp/Footer';
import Main from './funcComp/Main';
function App() {
  return (
    <div>
      <Header />
      <Main color="blue" />
      <Footer />
    </div>
  );
}
export default App;
