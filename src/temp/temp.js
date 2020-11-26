import { useState, useRef, useEffect } from 'react';
import './LazyForm.css';

function LazyForm() {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('update');
  });

  function handleSubmit(e) {
    alert('A name was submitted: ' + value);
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LazyForm;
