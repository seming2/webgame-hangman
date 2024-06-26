import GameBoard from "./game-board";
import "./App.css";

export default function App(){
  return(
    <div className="container">
      <h1>Welcome to Hangman!</h1>
      <p>Do you want to play game?</p>
      <div>
          <GameBoard secretWord="React"/>
      </div>
    </div>
  );

}