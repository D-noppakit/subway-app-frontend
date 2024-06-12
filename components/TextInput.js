// TextInput.js
import React from 'react';
import useStore from '@/lib/store2';

const TextInput = () => {
  const { text, setText } = useStore();

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter some text"
      />
      <p>Current Text: {text}</p>
    </div>
  );
};

export default TextInput;
