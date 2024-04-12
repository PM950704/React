import React from 'react';
import Message from './comp/Message';
import Counter from './comp/Counter';
import UserInfo from './comp/UserInfo';

function App() {
  return (
    <div>
      <UserInfo username={'박정환'} age={26} />
      <Message message={'취미는 농구입니다.'} />
      <UserInfo username={'주현지'} age={25} />
      <Message message={'취미는 전시회 관람입니다.'} />
      <UserInfo username={'김신현'} age={26} />
      <Message message={'취미는 홀덤입니다.'} />
      <UserInfo username={'박호용'} age={60} />
      <Message message={'취미는 술입니다.'} />
      <UserInfo username={'최혜은'} age={57} />
      <Message message={'취미는 요리입니다.'} />

      <Counter />
    </div>
  );
}

export default App;
