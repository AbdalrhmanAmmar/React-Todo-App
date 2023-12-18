import ReactConfetti from "react-confetti";

function Confetti() {
  return (
    <>
      <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
    </>
  );
}

export default Confetti;
