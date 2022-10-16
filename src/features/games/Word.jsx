import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Word = ({ word, level, playAgain, img, setLevel, groups }) => {
  const [alphabet] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const targWord = word.words[0];

  const letters = [...word.words[0]].map((letter) => letter);

  const validateLetter = (letter) => {
    if (letters.includes(letter)) {
      const copy = [...correctLetters];
      copy.push(letter);
      setCorrectLetters(copy);
    } else {
      const copy = [...wrongLetters];
      copy.push(letter);
      setWrongLetters(copy);
    }
  };

  console.log(word);
  return (
    <>
      <div>
        {groups.map((_, index) => (
          <Button
            className={`me-2 ${level === index && "btn-warning"}`}
            onClick={() => {
              setLevel(index);
              setCorrectLetters([]);
              setWrongLetters([]);
              playAgain(level);
            }}
          >
            Level {index + 1}
          </Button>
        ))}
      </div>

      <div className="mt-2">
        {alphabet.map((letter) => (
          <Button
            className={`me-2 text-white ${
              wrongLetters.includes(letter) ? "btn-secondary" : "btn-info"
            }`}
            onClick={() => validateLetter(letter)}
            disabled={wrongLetters.includes(letter)}
          >
            {letter}
          </Button>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        {letters.map((letter) => (
          <p className="me-2 fs-1">
            {correctLetters.includes(letter) ? letter : "_"}
          </p>
        ))}
      </div>
      {correctLetters.length === targWord.length && (
        <>
          <h3 className="text-success">Congrats</h3>
          <Button
            onClick={() => {
              setCorrectLetters([]);
              setWrongLetters([]);
              playAgain(level);
            }}
          >
            Play Again
          </Button>
        </>
      )}
      <img src={img} alt="somehting" />
    </>
  );
};

export default Word;
