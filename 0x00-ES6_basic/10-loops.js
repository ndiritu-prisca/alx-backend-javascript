/* Use ES6’s for...of operator without using var. */
export default function appendToEachArrayValue(array, appendString) {
  let x = 0;
  for (const elem of array) {
    // eslint-disable-next-line
    array[x] = appendString + elem;
    x += 1;
  }

  return array;
}
