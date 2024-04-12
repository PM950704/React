import React from 'react';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '홍길동',
      age: 300,
      job: 'developer',
    };
  }
  render() {
    const { name, age, job } = this.state;
    return (
      <div style={{ margin: 15 }}>
        <div>name: {name}</div>
        <div>age: {age}</div>
        <div>job: {job}</div>
      </div>
    );
  }
}
