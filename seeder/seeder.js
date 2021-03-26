// Node core components
const { join } = require('path');

// 3rd party modules
const pressAnyKey = require('press-any-key');

// Settings
require(join(__dirname, 'config', 'set'));

// Menu functions
const { question } = require(__seeder_functions);

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
        console.log(1);
        await pressAnyKey();
        doCycle = true;
        break;
      case 2:
        console.log(2);
        doCycle = true;
        break;
      case 666:
        doCycle = true;
        const { result } = await question('Are you sure?');
        if (!result) break;
        doCycle = false;
        await pressAnyKey('Good bye...');
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
