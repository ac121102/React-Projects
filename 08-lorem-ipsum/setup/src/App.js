import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const repeat = (arr, n) => Array(n).fill(arr).flat();

  const handleSubmit = (e) => {
    e.preventDefault();
    let cnt = parseInt(count);
    if (cnt < 1) {
      cnt = 1;
    }
    setText(
      repeat(data, Math.floor(cnt / data.length)).concat(
        data.slice(0, cnt % data.length)
      )
    );
  };

  return (
    <section className='section-center'>
      <h3>Tired of boring Lorem ipsum?</h3>
      <form
        className='lorem-form'
        onSubmit={handleSubmit}
      >
        <label className='amount'>Paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <br />
        <button
          type='submit'
          className='btn'
        >
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
