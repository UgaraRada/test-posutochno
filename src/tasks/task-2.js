function numbersInterval(getArr) {
  const sortArr = getArr.sort((a, b) => a - b);
  let check = 0;
  return sortArr.reduce((span, it, i, arr) => {
    check = arr[i + 1] - it !== 1 ? 0 : check + 1;
    if (check > 1) return `${span.slice(0, -1)}-`;
    return `${span}${it},`;
  }, '').slice(0, -1);
}
