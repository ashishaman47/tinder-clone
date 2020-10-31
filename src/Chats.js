import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
  return (
    <div className='chats'>
      <Chat
        name='Ellen'
        message='YO whats up!'
        timestamp='40 seconds ago'
        profilePic='https://i2-prod.mirror.co.uk/incoming/article22543420.ece/ALTERNATES/s615b/0_Ellens-Game-of-Games-Season-3.jpg'
      />
      <Chat
        name='Sarah'
        message='Hey! How are you😊'
        timestamp='55 seconds ago'
        profilePic='https://qph.fs.quoracdn.net/main-qimg-ac3c464623017b0a63e7cc1efd927499'
      />
      <Chat
        name='Sandra'
        message='Ola!'
        timestamp='3 days ago'
        profilePic='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sandra-bullock-attends-the-gala-screening-of-bird-box-news-photo-1060871326-1554419178.jpg?crop=1.00xw:0.654xh;0,0.0300xh&resize=480:*'
      />
      <Chat
        name='Natasha'
        message='Oops there is he is... '
        timestamp='1 week ago'
        profilePic='https://vignette.wikia.nocookie.net/fear-factor-khatron-ke-khiladi/images/8/83/KKK7Natasha.jpg/revision/latest?cb=20200306200417'
      />
    </div>
  );
}

export default Chats;
