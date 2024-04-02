import React, { Component } from 'react';
import Person from './Comp/Person';

function App() {
  return (
    <div>
      <Person name="박정환" color="brown" height={189} />
      <Person name="김길동" color="red" height={168} />
      <Person name="주현지" color="grey" height={160} />
      <Person name="전혜리" color="blue" height={155} />
      <Person name="김상식" color="yellow" height={199} />
    </div>
  );
}

export default App;
