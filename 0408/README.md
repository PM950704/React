
# 0408 복습 및 과제

## 과제

### 회원가입

![스크린샷 2024-04-13 163840](https://github.com/PM950704/React/assets/127920204/d9d1054c-b3ae-49ff-913f-3f97b90d2164)


```
import React, { Component } from 'react';


export default class MultiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }
  doChange (e) {
    const userValue = e.target.value
    const key = e.target.name
    this.setState({[key]: userValue})
  }
  doSubmit(e) {
    e.preventDefault();
    const j = JSON.stringify(this.state);
    window.alert(j);
  }
  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      생략
    );
  }
}

```

> 초기값을 빈 스트링으로 주었고 요즘 회원가입 페이지에서는 개인정보를 받지 않기에 아이디로 쓸 메일과 비밀번호, username만 받고 signup 버튼을 클릭하면 input form에 입력한 string들을 반환해서 경고창에 보여주는 페이지를 만들어보았습니다.

### 컴포넌트 및 state를 사용한 웹사이트 만들기

![스크린샷 2024-04-13 163728](https://github.com/PM950704/React/assets/127920204/64f940f4-3741-4793-8fee-f6a4693f5b6c)


> userInfo, Counter, message 컴포넌트를 만들었고 UserInfo에는 이름과 나이를 message에는 취미 버튼을 누르면 해당 사람의 취미를 볼 수 있게 설계 했습니다.
> 마지막으로 페이지 맨 밑에 몇 명을 보았는지 count 할 수 있는 Counter를 만들어 인원을 셀 수 있게 해놓았습니다.

## 복습

### SetState

![스크린샷 2024-04-13 172112](https://github.com/PM950704/React/assets/127920204/62113521-aed8-4955-99ea-04105150ca71)

![스크린샷 2024-04-13 172120](https://github.com/PM950704/React/assets/127920204/c37ab831-bce2-4851-bf66-eadc5a22ab26)

#### State를 사용하는 이유

> 일반 변수는 변경되어도 자동으로 화면에 Rerendering 되지 않는다. 하지만 State는 다르다. state를 사용하면 변수 값이 변경되었을 때 화면이 Rerendering 되는것을 확인 할 수 있다.

---

#### SetState는 비동기적으로 작동한다.

> 변경되는 State가 많을수록 Rerendering이 자주 일어나고 성능 저하가 발생하는 상황이 생길 수 있기 때문에 비동기적으로 작동한다. 따라서 이런 State의 특징을 알고 코드를 작성해 나가는 것이 중요하다.

### Class Component

![스크린샷 2024-04-13 172541](https://github.com/PM950704/React/assets/127920204/2f4b6e89-d4c1-4b13-a487-612ae3fee3c7)


#### State 사용

> : render() 함수 안에서 const { 스테이트1, 스테이트2, ... } = this.state로 비구조 할당 사용 가능

---

> 값 변경 시에는 setState를 쓰며, this.setState({ 스테이트명: 신규값 }) 형태로 사용 가능

---

#### 주의점

> state에 직접적으로 값을 설정하면 안된다(쉽게 말해 = 을 쓰면 안된다는 것)

---

#### 올바른 방법

```
this.setState({ count: count+1 })
```

```
this.setState((prevState, props) => ({
counter: prevState.counter + props.increment
}));
```

### EventHandling

![스크린샷 2024-04-13 172411](https://github.com/PM950704/React/assets/127920204/3434ecb5-bb0f-4128-b1c1-4cf115a764fd)

![스크린샷 2024-04-13 172436](https://github.com/PM950704/React/assets/127920204/af23509f-9f67-4779-bfb5-87491871bb94)

#### 리액트 EventHandling 문법

```
onClick={changeName} (o)
<button onClick={changeName}>Change</button>
```

> 위와 같이 소문자 대신 **CamelCase**를 사용한다

```
<button onClick={()=> {
setMyName(myName === "홍길동" ? "김길동" : "홍길동");
}}>
```

> 함수를 직접 선언하여 사용할 수도 있다.

### Component Life Cycle

![스크린샷 2024-04-13 171536](https://github.com/PM950704/React/assets/127920204/ca4c2181-f159-4fd9-b7f3-5120095bbcf1)


**Mounting -> Updating -> Unmounting**

### Input Form

![스크린샷 2024-04-13 172312](https://github.com/PM950704/React/assets/127920204/f714e8cd-8394-43b0-a650-8f2131a4ef76)


> 0408에서 배운 내용들을 종합하여 Input Form을 간단하게 만들어보았다.
> 입력 Form에 숫자나 문자만 받을 수 있게 설정이 가능하니 참고하면 좋을 것 같다.
