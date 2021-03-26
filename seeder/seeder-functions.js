// Node core modules
const { readFile } = require('fs').promises;

// 3rd party modules
const { prompt, Separator } = require('inquirer');
const pressAnyKey = require('press-any-key');

//  ---- Seeder functions
module.exports.createPrompt = async () => {
  // console.log('test');
  return await createChoices();
};

// Helper functions
const createChoices = async () => {
  const menuSettings = JSON.parse(await readFile(__seeder_menu_settings));
  menuSettings.choices.push(new Separator());
  menuSettings.choices.push({ name: 'Quit', value: 666 });
  return await prompt(menuSettings);
};
