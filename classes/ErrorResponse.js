// 3rd party module
const moment = require('moment');
const statuses = require('statuses');

class ErrorResponse extends Error {
  constructor(statusCode, message, place) {
    super(message);
    this.statusCode = statusCode;
    if (ErrorResponse !== undefined) this.status = statuses[statusCode];
    this.place;
    this.date = moment();
    // this.timestamp = this.date.unix();
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode;
    this.status = statuses[statusCode];
  }

  saveToFile() {
    this.statusCode;
    let msg = `date: ${this.date} :-: statusCode: ${'test'} :-: status: ${this.status} :-: place: ${this.place} :-: message: ${this.message} :-: stack: ${this.stack}\n\n`;
    __access_error_logs_stream.write(msg);
  }
}

module.exports = ErrorResponse;
