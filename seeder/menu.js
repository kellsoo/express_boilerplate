// Seeder functions
const { createPrompt } = require(__seeder_functions);

exports.mainMenu = async () => {
  console.clear();
  return await createPrompt();
};
