# 0429 복습

## useReducer

> useState를 대체할 수 있는 함수이다.
> 좀 더 복잡한 상태 관리가 필요한 경우 reducer를 사용할 수 있다.

### Counter_NoInit
![Counter_noInit](https://github.com/PM950704/React/assets/127920204/833e51c4-fc91-4855-8403-70ac33224c03)

init 함수를 사용하지 않은 예시이다.

### Counter_init
![Counter_Init](https://github.com/PM950704/React/assets/127920204/40386886-82f9-4639-8640-6c56709d3b23)

init 함수를 사용한 예시이다
- 초기 state를 조금 지연해서 생성할 수 있다.
- init 함수를 세 번째 인자로 전달하면, 초기 state는 init에 설정될 것이다.

### Counter_useReducer
![useReducer_State](https://github.com/PM950704/React/assets/127920204/e85216fb-cc04-4201-ac5a-51f8ea77e497)

useReducer를 사용하여 Counter를 간단하게 작성해보았다.



## useContext

> 리액트의 일반적인 데이터 흐름은 부모 컴포넌트에서 자식 컴포넌트로 props를 통해 '단방향'으로 흐른다.
> 엄청 큰 컴포넌트 트리가 있다고 가정할 때 전역적인 데이터가 있을 수 이따.
> 전역 데이터를 일일이 props로 단계별로 전달해야 한다면 정말 비효율 적이다.

이러한 문제점을 해결해주는 Context API를 제공한다.

![usingContext](https://github.com/PM950704/React/assets/127920204/bb95a767-f8eb-4213-879f-38b2f560a4aa)

![usingContext (2)](https://github.com/PM950704/React/assets/127920204/9c28dd8a-dacb-418f-97f6-a81a572c9260)

![useContextLast](https://github.com/PM950704/React/assets/127920204/4f3bb760-8b54-4fd6-b560-f6c61c0b8186)

-App 컴포넌트가 가지고 있는 isDark는 전체적인 테마에 관련된 data를 담고 있기에 전역적이다.
-따라서 App 컴포넌트로 돌아가서 context를 import한 후 page 컴포넌트를 만들어준 context의 provider로 감싸준다.
-Context의 provider는 value라는 props를 받는데 이 안에는 전달하고자 하는 데이터를 넣어준다.
-ThemeContext 감싸는 모든 하위 컴포넌트는 props를 사용하지 않고 value로 넣어준 값에 접근할 수 있다.


## useRef

### useRef1
![useRef1](https://github.com/PM950704/React/assets/127920204/60632503-a85f-4e8e-a5c1-09ce6aabdf8c)

### refDom1
![refDom1](https://github.com/PM950704/React/assets/127920204/07afafd2-dd38-433f-84f5-f2a9cdf3bf9a)

## refDom2
![refDom2](https://github.com/PM950704/React/assets/127920204/d1c77762-fd93-424e-a61a-48314c8d3589)

> useRef 는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환한다.

반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다.
useRef는 저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook이다.
- ForwardRef 사용법
1. 부모 컴포넌트에서 useRef()를 선언하고, 자식 컴포넌트에 보낸다.
2. 자식 컴포넌트를 forwardRef()로 감싸고, 부모에서 사용할 함수를 useImperativeHandle()로 감싼다.
3. 부모 컴포넌트에서 current 프로퍼티를 통해 함수를 사용한다.


## useImperativeHandle
![useImperativeHandle](https://github.com/PM950704/React/assets/127920204/546caae4-c13e-4b29-86b2-c2188d0db60e)

- React 함수형 컴포넌트는 부모 컴포넌트와 자식 컴포넌트 간에 데이터와 함수를 주고 받는 일이 일반적이다. 이러한 데이터와 함수 전달은 React의 핵심원리중 하나이다.
- useImperatvieHandle 훅은 자식 컴포넌트가 부모 컴포넌트로부터 함수나 메서드를 ㅡ 노출하고 커스터마이징할 때 사용된다.
- 이를 통해 부모 컴포넌트는 자식 컴포넌트 내부의 늑정 함수나 메서드에 직접 접근할 수 있다.


## useEffect

> useEffect함수는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.
> useEffect(func, deps) : Func = 수행하고자 하는 작업 deps = 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

### useEffect
![useEffect](https://github.com/PM950704/React/assets/127920204/6e3b2423-0408-49ef-b6e4-eb39005b73b1)

### useEffect1
![useEffect1](https://github.com/PM950704/React/assets/127920204/7e5d4150-6fa6-4880-a421-4c1905f66ded)
### useEffect2
![useEffect2](https://github.com/PM950704/React/assets/127920204/8dcbb2d6-625a-4ebd-b796-7606e035efc5)
### useEffect3
![useEffect3](https://github.com/PM950704/React/assets/127920204/9305b15b-89d5-4d96-b790-413f29c1f3e3)
### useLayoutEffect
![useLayoutEffect](https://github.com/PM950704/React/assets/127920204/422c05bc-83a6-4424-89ae-12f173144fdb)
### useEffect_LayoutEffect 비교
![useEffect_LayoutEffect](https://github.com/PM950704/React/assets/127920204/7e8959e8-3cb3-4ecf-adde-a7c44839c79b)
#### useEffect
useEffect는 컴포넌트들이 render와 paint 된 후 실행된다. 비동기적으로 실행된다.

#### useLayoutEffect
useLayoutEffect는 컴포넌트들이 render 된 후 실행되며, 그 이후에 paint가 된다. 동거적으로 실행된다.
