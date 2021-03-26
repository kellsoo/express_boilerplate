// Node core modules
const { readFile } = require('fs').promises;

// 3rd party modules
const { prompt, Separator } = require('inquirer');
const pressAnyKey = require('press-any-key');

//  ---- Seeder functions
module.exports.createPrompt = async () => {
  return await createChoices();
};

module.exports.question = async (message) => {
  const settings = { type: 'confirm', message, name: 'result' };
  return await prompt(settings);
};

// Helper functions
const createChoices = async () => {
  const menuSettings = JSON.parse(await readFile(__seeder_menu_settings));
  menuSettings.choices.push(new Separator());
  menuSettings.choices.push({ name: 'Quit', value: 666 });
  return await prompt(menuSettings);
};
