// Node core modules
const { join } = require('path');
// test

// System settings
const app = require(join(__dirname, 'config', 'system-settings'));

//  ------- Routes Part -------
const mainRoutes = require(join(__routes, 'main'));
const apiRoutes = require(join(__routes, 'api', 'main'));

// Main routes
app.use('/api', apiRoutes);
app.use('/', mainRoutes);

// ----------- Server part -------
// functions
const { successFirstMethod } = require(__messages);
const { createSuccessSystemLog, createErrorSystemLog } = require(join(__functions, 'system-logger'));

// ENV variables settings
let { PORT, IP, NODE_ENV } = process.env;
PORT = PORT || 5000;
IP = IP || 'localhost';

// Server listen
app.listen(PORT, IP, () => {
  try {
    let msg = `server started on ${IP.yellow}:${PORT.yellow}...\n${'NODE_ENV'.magenta} = ${NODE_ENV.yellow}`;
    console.log(successFirstMethod(msg));
    createSuccessSystemLog(`server started on ${IP}:${PORT}`);
  } catch (err) {
    createErrorSystemLog(err);
  }
});

process.on('unhandledRejection', (err) => {
  err = new Error(err);
  err.name = 'unhandledRejection';
  createErrorSystemLog(err);
  process.exit(1);
});
