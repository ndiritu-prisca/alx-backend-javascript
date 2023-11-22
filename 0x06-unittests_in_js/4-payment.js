const Utils = require('./utils')

function sendPaymentRequestToApi(totalAmount, totalshipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalshipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
