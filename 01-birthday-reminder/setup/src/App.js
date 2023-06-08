import React, { useState } from 'react';
import data from './data';
import List from './List';

const handleClear = (setPeople, setPersonCount) => {
  setPeople([]);
  setPersonCount(0);
};

function App() {
  const [personCount, setPersonCount] = useState(Object.keys(data).length);
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{personCount} birthdays today</h3>
        <List list={people} />
        <button onClick={() => handleClear(setPeople, setPersonCount)}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
