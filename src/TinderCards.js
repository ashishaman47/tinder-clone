import React, { useState, useEffect } from 'react';
import './TinderCards.css';
// importing TinderCard dependency from react-router-dom
import TinderCard from 'react-tinder-card';
import database from './firebase';

function TinderCards() {
  // array of people --> which stores object (image, name)
  const [people, setPeople] = useState([]);

  //piece of code that runs based on condition
  useEffect(() => {
    // it returns a func. which we store in unsubscribe and later we call it for cleanup
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      // this is cleanup
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className='card'
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
