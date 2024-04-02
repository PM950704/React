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
