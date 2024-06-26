import { useState } from "react";
import GameBoard from "./game-board";
import WordSelect from "./word-select";
import "./App.css";

export default function App(){
  const [sercetWord, setSercetWord] = useState('');

  return(
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
          <WordSelect
          isShown={!sercetWord}
          />
          <GameBoard 
          secretWord={sercetWord}
          maxErrors={6}
          isShown={sercetWord}
          />
      </div>
    </div>
  );

}