export default function cleanSet(set, startString) {
  const filteredValues = [];

  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((elem) => {
    if (elem.startsWith(startString)) {
      filteredValues.push(elem.slice(startString.length));
    }
  });
  return filteredValues.join('-');
}
