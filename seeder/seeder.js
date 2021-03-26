// Node core components
const { join } = require('path');

// Settings
require(join(__dirname, 'config', 'set'));

// Menu items
const { mainMenu } = require(__seeder_menu);

// Main
(async () => {
  console.clear();
  let answer;
  // await mainMenu();
  let doCycle = true;
  do {
    answer = (await mainMenu()).answer;
    console.log(answer);
    console.clear();
    switch (answer) {
      case 1:
        // await updateTranslationsDb();
        console.log(1);
        doCycle = true;
        break;
      case 2:
        // await seed();

        console.log(2);

        doCycle = true;
        break;
      case 666:
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
