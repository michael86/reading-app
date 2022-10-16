import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Word from "./Word";

const GuessingGame = () => {
  const groups = useSelector((state) => state.groups.groups);

  const [level, setLevel] = useState(0);

  const targIndex = Math.floor(Math.random() * groups[level].length - 1);

  const [word, setWord] = useState(groups[level][targIndex]);

  const playAgain = (l) => {
    const targIndex = Math.floor(Math.random() * groups[level].length - 1);

    setWord(groups[level][targIndex]);
  };

  return (
    <>
      <Container className="text-center">
        <h1>Guessing game</h1>

        <Word
          word={word}
          level={level}
          targIndex={targIndex}
          playAgain={playAgain}
          setLevel={setLevel}
          groups={groups}
          img={require(`../../assets/images/group${level + 1}/${
            groups[level][targIndex].letter
          }.gif`)}
        />
      </Container>
    </>
  );
};

export default GuessingGame;
