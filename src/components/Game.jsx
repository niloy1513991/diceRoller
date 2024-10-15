import { useEffect, useState } from "react";

function Game() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const diceRoll = () => {
    const newNumber = getRandomNumber();
    setDiceNumber(newNumber);
    setIsTransitioning(true);
  };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Duration of the transition
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <>
      <div
        className="xl:w-[1400px] lg:w-[1000px]  md:w-[700px] bg-[#f6f6f6] h-[600px] w-[300px] mx-auto mt-2 rounded-lg
      flex flex-col "
      >
        <div
          className="title bg-[#ebebeb] w-[290px]  h-20 mx-auto mb-8 mt-12 flex flex-col rounded-xl
        "
        >
          <h1 className="font-semibold text-5xl text-center mt-4 mb-2">
            DICE ROLL
          </h1>
        </div>
        <div className="output flex mx-auto  h-auto w-72 justify-center flex-col">
          <h1
            className={`output bg-[#ffffff] h-40 w-52 text-9xl flex text-center justify-center items-center font-semibold rounded-xl mx-auto m-2 transition-transform duration-300 ${
              isTransitioning ? "scale-110" : ""
            }`}
            name=""
            id=""
            readOnly
          >
            {diceNumber}
          </h1>
        </div>
        <div className="dice h-44 w-72  mx-auto flex-col mt-2">
          <img
            src={`/images/dice_${diceNumber}.png`}
            alt=""
            className={`h-28 w-auto mx-auto mt-4 transition-transform duration-300 ${
              isTransitioning ? "rotate-12" : ""
            }`}
            onClick={diceRoll}
          />
          <h4 className="h-8 w-64 text-slate-600 flex text-sm mx-auto text-center justify-center items-center mt-2">
            Tap on the dice to roll it
          </h4>
        </div>
        <div className="copyright text-slate-600 text-center h-10 w-72 b mx-auto mt-8 flex justify-center items-center">
          <a href="http://niloykm.me/profileLinks/" target="_blank">
            Connect with &copy;Niloy
          </a>
        </div>
      </div>
    </>
  );
}

export default Game;
