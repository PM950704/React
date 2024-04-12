import React, { useState } from 'react';
// Props와 State를 가진 컴포넌트
const Message = ({ message, showMessage }) => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>취미</button>
      {visible && <p>{message}</p>}
      {showMessage && <p>Showing message: {visible ? 'Yes' : 'No'}</p>}
    </div>
  );
};

export default Message;
