export const Practis2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    //返却値の値も引数と同じ型にされる　（型推論）
    return total;
  };

  const onClickPractice = () => {
    console.log(getTotalFee(100));
  };
  return (
    <div>
      <p>練習:返却値の型指定</p>
      <button onClick={onClickPractice}>練習2</button>
    </div>
  );
};
