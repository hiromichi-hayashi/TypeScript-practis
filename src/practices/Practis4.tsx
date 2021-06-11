export const Practis4 = () => {
  //tsconfig "strict": true, でエラー文などを設定する
  const clacTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => {
    clacTotalFee(100);
  };
  return (
    <div>
      <p>練習:設定ファイル</p>
      <button onClick={onClickPractice}>練習４</button>
    </div>
  );
};
