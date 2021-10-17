export const generateRandomWord = (
  adjArr: Array<string>,
  nounsArr: Array<string>
) => {
  const resultArr = [];
  const data = Math.round(Math.random() * adjArr.length);
  const data2 = Math.round(Math.random() * adjArr.length);
  const data3 = Math.round(Math.random() * nounsArr.length);
  resultArr.push(adjArr[data], adjArr[data2], nounsArr[data3]);
  return resultArr.join(" ");
};
