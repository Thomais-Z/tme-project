export const forEach = (arr, fn) => {
  for (let element of arr) {
    fn(element);
  }
};

export default forEach;
