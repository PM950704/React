import React from 'react';
import PropTypes from 'prop-types';
function Main({ color, name, maleYn }) {
  const msg = maleYn ? '남자' : '여자'; // 불리언 사용
  return (
    <div>
      <main>
        <h1 style={{ color }}>
          안녕하세요. {name} 입니다. ({msg})
        </h1>
      </main>
    </div>
  );
}
Main.propTypes = {
  name: PropTypes.string,
};
Main.defaultProps = {
  name: '디폴트',
};
export default Main;
