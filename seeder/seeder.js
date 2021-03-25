// Node core components
const { join } = require('path');

// Settings
require(join(__dirname, 'config', 'set'));
(async () => {
  await connection.authenticate();
  console.clear();
  let answer;
  let doCycle = true;
  do {
    answer = (await mainMenu()).answer;
    console.clear();
    switch (answer) {
      case 1:
        await updateTranslationsDb();
        doCycle = true;
        break;
      case 2:
        await seed();
        console.clear();
        doCycle = true;
        break;
      case 3:
        console.clear();
        await forceSync();
        doCycle = true;
        break;
      case 666:
        // answer = (await question('Are you sure?')).answer;
        // if (answer) doCycle = false;
        // else {
        //   doCycle = true;
        // }
        doCycle = false;
        break;
      default:
        doCycle = true;
        break;
    }
  } while (doCycle);
  console.clear();
  process.exit();
})();

process.on('unhandledRejection', (err) => {
  console.log('!!Error!!'.red.inverse);
  console.log(err.message.red.bold);
  process.exit(1);
  console.clear();
});
