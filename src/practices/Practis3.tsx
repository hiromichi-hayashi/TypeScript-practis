export const Practis3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };

  const onClickPractice = () => {
    //変数に型を指定することで値を受け取る関数が曖昧でもエラーを出してくれる
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習:変数の型指定</p>
      <button onClick={onClickPractice}>練習3</button>
    </div>
  );
};
