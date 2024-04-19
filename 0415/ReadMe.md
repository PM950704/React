# Hook

### Hook 장점

1. 상태 로직 단순화
2. 코드 재사용성과 관심사 분리
3. 사이드 이펙트 감소

### Hook의 규칙

1. 최상위(at the Top Level)에서만 Hook을 호출해야 한다.
2. 오직 React 함수 내에서 Hook을 호출해야 한다.

### Text Field & Form

사진

#### Text Field

> Text 상태 변수는 문자열을 유지한다. text에 입력을 하면 브라우저 입력 Dom 요소에 최신 입력 값을 읽고 setText를 호출하여 상태를 업데이트한다.
> 이를 통해 현재 텍스트를 아래에 표시하게된다.

#### Form

> 동일한 Component에서 둘 이상의 상태 변수를 선언할 수 있는 것을 알 수 있다. 각 상태 변수는 독립적이다.

### Counter

```
import { useState } from 'react';
export default function Counter() {
const [age, setAge] = useState(42);
function increment() {
setAge(age + 1);
}
return (
<>
<h1>Your age: {age}</h1>
<button onClick={() => {
increment();
increment();
increment();
}}>+3</button>
<button onClick={() => {
increment();
}}>+1</button>
</>
)
}
```

위 코드는 Updater Function을 Pass하지 못하므로 의도한대로 +3 버튼을 눌러도 +1만 된다.

```
setAge(a => a + 1);
```

위 코드부분만 바꿔주면 Updater Function을 Pass하므로 의도한대로 코드가 작동하게된다.

### Form3

사진

Form 상태변수는 객체를 유지한다. 각 Input은 전체 Form을 다음 상태로 변경하는 setForm 호출하는 ChangeHandle이 있다.

### Form4(nested object)

사진

상태가 중첩된다. 중첩된 상태를 업데이트 할 때 업데이트할 객체의 복사본 뿐만 아니라 위쪽으로 "포함"되는 객체도 만들어야한다.

### TaskApp & AddTodo & TaskList

사진

todos 상태 변수는 배열을 유지합니다. 각 버튼 처리기는 해당 배열의 다음 버전으로 setTodos를 호출합니다. 자세한것은 소스를 올려놓았으니 살펴보면 좋을 것 같다.

### TodoList

> Passing the Initializer Function

initalizer Function을 전달하므로 createInitialTodos 함수는 초기화중에만 실행된다. 입력을 입력할 때와 같이 구성 요소가 다시 렌더링 될 때까지 실행되지 않는다.

### APP(CountLabel)

사진

다음 예제가 있다. 이 CountLabel 구성 요소는 해당 구성 요소에 전달된 카운트 prop을 표시한다

> 카운터가 마지막으로 변경된 이후에 증가했는지 감소했는지 보여주고자 한다. 이전 값을 추적할려
> 고 하지만 카운트 prop은 이것을 알려주지 않는다. prevCount 상태 변수를 추가하면 이전 값을 추
> 적할 수 있다. trend라는 다른 상태 변수를 추가하여 카운트가 증가했는지 또는 감소했는지 여부를
> 유지한다. prevCount와 카운트를 비교하고, 카운터가 동일하지 않으면 prevCount와 trend를 모두
> 업데이트한다. 이제 현재 카운트 prop과 마지막 렌더링 이후에 어떻게 변경되었는지 모두 보여줄
> 수 있다.
