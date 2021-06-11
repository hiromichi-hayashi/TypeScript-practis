export const Practis1 = () => {
  const clacTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    clacTotalFee(100);
  };
  return (
    <div>
      <p>練習</p>
      <button onClick={onClickPractice}>練習1</button>
    </div>
  );
};
