import React, { useState } from 'react';

function Welcome(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>👋 Hello, {props.name}!</h2>
      <p>You've clicked the button <strong>{count}</strong> times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Welcome;
