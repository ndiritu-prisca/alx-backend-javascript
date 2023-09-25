export default function taskBlock(trueOrFalse) {
  /* changing var to const so that variables are not overwritten */
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* eslint-disable no-unused-vars */
    const task = true;
    const task2 = false;
    /* eslint-disable no-unused-vars */
  }

  return [task, task2];
}
