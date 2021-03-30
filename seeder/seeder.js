// Node core components
const { join } = require('path');

// Settings
require(join(__dirname, 'config', 'set'));

// Menu functions
const { question } = require(__seeder_functions);

// Menu items
const { mainMenu, item1func, item2func } = require(__seeder_menu);

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
        await item1func();
        break;
      case 2:
        await item2func();
        break;
      case 666:
        const { result } = await question('Are you sure?');
        if (!result) break;
        doCycle = false;
        break;
      default:
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
