import style from './GameOver.module.css';

function GameOver({retry, score}) {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2 className={style.score}>A sua pontuação foi <span>{score}</span> </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  )
}

export default GameOver