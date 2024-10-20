import React, { useState } from 'react';
import './Gameplay.css';
import Numberselector from '../NumberSelector/Numberselector';
import Button from '../Button/Button';
import Rules from '../Rules/Rules';
import RoleDice from '../RoleDice/RoleDice';

const Gameplay = () => {

  const [score, setScore] = useState(5);
  const [showrules, setShowrules] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentdice, setCurrentdice] = useState(1);
  const [error, setError] = useState()

  const generateRandom = (min, max) => {
    console.log( Math.floor(Math.random() * (max - min + 1)) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Updated formula
  };


  const rollDice = () => {

    if(selectedNumber == null) {
    return  setError("Please select a number");
    };
    setError("");
    const dice = generateRandom(1, 6);
    setCurrentdice(dice);

    if(selectedNumber===dice){
      setScore(score+dice);
    }
    else{
      setScore(score-2)
    }
    setSelectedNumber(null)
  };

  // Toggle rules visibility
  const showRules = () => {
    console.log("Toggling rules visibility");
    setShowrules((previous) => !previous);
  };

  return (
    <>
    <div className="play_main">

    
      <div id="top">
        <div id="gameleft">
          <h2>{score}</h2>
          <h6>Total Score</h6>
        </div>
        <div id="gameright">
          <div id="dicenums">
            <Numberselector
            error={error}
            selectedNumberu={selectedNumber}
            setSelectedNumberu={setSelectedNumber}
            />
            <h5>Select Number</h5>
          </div>
        </div>
      </div>
      <div id="mid">
        <RoleDice

        currentdice={currentdice}
        rollDice={rollDice}
        />
        <div id="buttons">
          {/* Reset button sets score to zero */}
          <Button id="reset" tgl={() => { console.log("Resetting score"); setScore(0); }} btn_name="Reset" />
          
          {/* Show Rules button with dynamic text */}
          <Button
            id="showrules" tgl={showRules} btn_name={showrules ? "Hide Rules" : "Show Rules"} />
        </div>

        {/* Show Rules component based on state */}
        {showrules ? <Rules show={showRules}/> : ""}
      </div>
      </div>
    </>
  );
};

export default Gameplay;
