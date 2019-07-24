import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import  { data }  from './teamData';
import TeamCard from './components/TeamCard';

function App() {
  const [members, setMembers] = useState( data );

  return (
    <div className="App">
      <TeamCard members={members}/>
    </div>
  );
}

export default App;
