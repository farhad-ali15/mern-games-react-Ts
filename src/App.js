import logo from "./logo.svg";
import "./App.css";
import { TicTacToe } from "./components/tic-tac-toe/tic-tac-toe";
import { AITicTacToe } from "./components/tic-tac-toe/ai-tic-tac-toe";
import Countdown from "./components/countdown/countdown.js";
import WordScramble from "./components/word-scramble/word-scramble";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Let's Play With Computer <span className="small"> alongwith </span>
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        {/* <TicTacToe /> */}
        {/* <WordScramble /> */}
        {/* <Countdown /> */}
        <AITicTacToe />
      </main>
    </div>
  );
}

export default App;
