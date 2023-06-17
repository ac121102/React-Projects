import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  let reviewCount = people.length;

  useEffect(() => {
    reviewCount = people.length;
  }, [people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index - 1 + reviewCount) % reviewCount);
    }, 5000);
    // Cleanup function
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span></span>reviews
        </h2>
      </div>

      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          // some stuff coming
          let position = 'nextSlide';

          if (personIndex === index) {
            position = 'activeSlide';
          } else if (
            (personIndex - 1 + reviewCount) % reviewCount ===
            index
          ) {
            position = 'lastSlide';
          }

          return (
            <article
              key={id}
              className={position}
            >
              <img
                src={image}
                alt={name}
                className='person-img'
              />
              <h4>{name}</h4>
              <title className='title'>{title}</title>
              <p className='text'>'{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}

        <button
          className='prev'
          onClick={() =>
            setIndex((index - 1 + reviewCount) % reviewCount)
          }
        >
          <FiChevronLeft />
        </button>
        <button
          className='next'
          onClick={() =>
            setIndex((index + 1 + reviewCount) % reviewCount)
          }
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
