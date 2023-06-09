import React, { useState } from 'react';
import people from './data';

import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const revSize = people.length;

  const prevPerson = () => {
    setIndex((index) => {
      return (index - 1 + revSize) % revSize;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      return (index + 1) % revSize;
    });
  };

  const randomPerson = () => {
    var newIndex = Math.floor(Math.random() * revSize);
    if (index === newIndex) {
      newIndex = (index + 1) % revSize;
    }
    setIndex(newIndex);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img
          src={image}
          alt={name}
          className='person-img'
        />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
      </div>

      <div>
        <button
          className='random-btn'
          onClick={randomPerson}
        >
          Surprise me!
        </button>
      </div>
    </article>
  );
};

export default Review;
