import React, { Component } from 'react';

// 여러 개의 입력 항목을 가진 컴포넌트
export default class MultiForm extends Component {
  constructor(props) {
    super(props);
    // 입력 양식의 초깃값을 설정합니다.
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }
  // 전송 버튼을 눌렀을 때
  doSubmit(e) {
    e.preventDefault();
    const j = JSON.stringify(this.state);
    window.alert(j);
  }
  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form onSubmit={doSubmit}>
        <div>
          <h1>회원가입</h1>
          <label>
            email: <br />
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            password: <br />
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            username: <br />
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={doChange}
            />
          </label>
        </div>
        <input type="submit" value="sign up" />
      </form>
    );
  }
}
