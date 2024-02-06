import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <button onClick={onReset} className="reset-button">
      Play Again
    </button>
  );
}

export default Reset;

function Strike({ strikeClass }) {
    return <div className={`strike ${strikeClass}`}></div>;
  }
  
  export default Strike;