/* Concatenate 2 arrays and each character of a string using spread syntax */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
