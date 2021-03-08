// Node core components
const { createWriteStream } = require('fs');

// Logs stream
global.__system_logs_stream = createWriteStream(__system_logs, { flags: 'a' });
global.__system_error_logs_stream = createWriteStream(__system_error_logs, { flags: 'a' });
global.__access_logs_stream = createWriteStream(__access_logs, { flags: 'a' });
global.__access_error_logs_stream = createWriteStream(__access_error_logs, { flags: 'a' });
