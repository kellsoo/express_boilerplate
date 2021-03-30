// 3rd part functions
const pressAnyKey = require('press-any-key');

// Seeder functions
const { createPrompt } = require(__seeder_functions);

exports.mainMenu = async () => {
  console.clear();
  return await createPrompt();
};

exports.item1func = async () => {
  console.clear();
  console.log('item 1 function');
  await pressAnyKey();
};
exports.item2func = async () => {
  console.clear();
  console.log('item 2 function');
  await pressAnyKey();
};
