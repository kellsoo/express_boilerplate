// 3rd party module
const moment = require('moment');
const statuses = require('statuses');

class ErrorResponse extends Error {
  constructor(statusCode, message, place) {
    if (message === undefined) message = 'Undefined error - our apologize';
    super(message);
    this.setStatusCode(statusCode);
    if (place !== undefined) this.place = place;
    this.date = moment();
    this.timestamp = this.date.unix();
  }

  setStatusCode(statusCode) {
    if (typeof statusCode !== 'number') this.statusCode = 500;
    else this.statusCode = statusCode;
    this.status = statuses[this.statusCode];
  }

  saveToFile() {
    let msg = `date: ${this.date} :-: statusCode: ${'test'} :-: status: ${this.status} :-: place: ${this.place} :-: message: ${this.message} :-: stack: ${this.stack}\n\n`;
    __access_error_logs_stream.write(msg);
  }
}

module.exports = ErrorResponse;
