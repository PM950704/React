# 0401 과제

![스크린샷 2024-04-02 232144](https://github.com/PM950704/React/assets/127920204/ee7fa7fa-a50e-43f3-a10a-6d6265147ab9)


> 2개 이상의 props를 전달하는 컴포넌트를 만들어보았습니다.
> name, color, height를 props로 전달하게 했습니다.

Person.jsx
```
import react from 'react';

function Person(props) {
  return (
    <div>
      <main>
        <h2 style={{ color: props.color }}>
          안녕하세요. {props.name}이고 키는 {props.height}입니다.
        </h2>
      </main>
    </div>
  );
}

export default Person;
```
App.js
```
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

```

# 0401 복습

## Comp

![스크린샷 2024-04-02 231035](https://github.com/PM950704/React/assets/127920204/79441639-863f-4825-bd69-4a018a7f0ddc)

> Component를 간단하게 만들어보았습니다

## Props1

![스크린샷 2024-04-02 230901](https://github.com/PM950704/React/assets/127920204/5252dfb8-1b33-410e-99a9-d453dfd55e5c)

> 1개의 Props를 전달하는 컴포넌트를 만들었습니다.

## Props2

![스크린샷 2024-04-02 230917](https://github.com/PM950704/React/assets/127920204/f721325c-7b0b-4cb1-855c-997f31e3a7a2)

> 2개의 Props를 전달하는 컴포넌트를 만들었습니다.

## PropsNum

![스크린샷 2024-04-02 230939](https://github.com/PM950704/React/assets/127920204/a6ceaa2a-949c-4c48-84ab-5a16b5201bde)

> Props 값에 숫자를 넣어보았습니다.
> Props에 숫자를 전달하려면 {}를 이용하여줘야 합니다.

## defaultProps

![스크린샷 2024-04-02 231049](https://github.com/PM950704/React/assets/127920204/fb9a95de-b566-4354-83be-63ac80650665)

> Props는 이처럼 default를 지정하고 사용할 수 있으니 유용하게 사용할 수 있을 것 같습니다.

## PropsBool

![스크린샷 2024-04-02 231022](https://github.com/PM950704/React/assets/127920204/e866d2ab-30fb-4263-9877-8e86f39e6891)

> Bool값을 확인해 True면 해당 Component를 보여주고 False면 보여지지 않게 설계가 가능하다는 것도 알아보았습니다


## PropsChildren

![스크린샷 2024-04-02 231129](https://github.com/PM950704/React/assets/127920204/d5d69af3-ff81-440f-aa75-82c3af035591)

> Props.children 활용해보았습니다
> Children을 사용하여 내부에 있는 내용을 표현할 수 있습니다

```
import React from 'react';
function Wrapper(props) {
const style = {
backgroundColor: 'yellow',
};
return (
<div style={style}>
</div>
);
}
export default Wrapper;
```
> 위와 같은 코드를 사용한다면 Main Component가 보여지지 않습니다.
> 따라서 아래와 같이 {props.children}을 사용해주어야 Main Component를 볼 수 있게 됩니다.

```
import React from 'react';
function Wrapper(props) {
const style = {
backgroundColor: 'yellow',
};
return (
<div style={style}>
{props.children}
</div>
);
}
export default Wrapper;

```
