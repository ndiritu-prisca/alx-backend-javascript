export default function iterateThroughObject(reportWithIterator) {
  let elemStr = '';
  let x = 0;

  while (x < reportWithIterator.length - 1) {
    elemStr += reportWithIterator[x];
    elemStr += ' | ';
    x += 1;
  }
  elemStr += reportWithIterator[x];

  return elemStr;
}
