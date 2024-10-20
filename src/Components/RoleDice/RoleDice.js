import React from 'react';

const RoleDice = ({rollDice, currentdice}) => {
  // const [currentdice, setCurrentdice] = useState(1);
  
  return (
    <>
      <div id="mid">
        <div id="diceimg" onClick={()=>{rollDice()}}>
          {/* Use array to select the current image */}
          <img src={`/dices/dice_${currentdice}.png`} alt="dice" />
        </div>
        <h3>Click on Dice to Roll</h3>
      </div>
    </>
  );
};

export default RoleDice;
