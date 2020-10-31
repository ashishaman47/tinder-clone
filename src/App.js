import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          {/* /:xyz --> represents any valid url */}
          <Route path='/chat/:person'>
            {/* Header */}
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path='/chat'>
            {/* Header */}
            <Header backButton='/' />
            <Chats />
          </Route>
          {/* always put default root at the bottom */}
          <Route path='/'>
            {/* Header */}
            <Header />
            {/* Tinder cards */}
            <TinderCards />
            {/* Buttons below the cards */}
            <SwipeButtons />
            {/* Chats screen */}
            {/* Individual chat screen */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
