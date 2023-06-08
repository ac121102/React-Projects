import React from 'react';

const List = ({ list }) => {
  console.log(list);
  return (
    <>
      {list.map(function (person) {
        const { id, name, age, image } = person;
        return (
          <article
            key={id}
            className='person'
          >
            <img
              src={image}
              alt='image'
            />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
