import React, { Component } from 'react';
import Header from './funcComp/Header';
import Footer from './funcComp/Footer';
import Main from './funcComp/Main';
function App() {
  return (
    <div>
      <Header />
      <Main name="박정환" color="blue" />
      <Footer />
    </div>
  );
}
export default App;
