# Express boilerplate

MVC boilerplate for express with EJS template system

## Warning!

Boilerplate is in progress!!! _And it will be for **very very long time**_ :D

## Configuration

!!! Before first start it is necessary to create **two folders** _env_ and _logs_ !!!

### logs folder 

**logs** folder should be empty and in default settings it is public folder (can access from browser!). The publicity of _logs_ folder is set in set in the file _./config/system-settings.js_

```javascript
// Set static files
app.use('/logs', express.static(path.join(__dirname, 'logs')));
```

The boilerplate creates four log files after first start:

- _system.log_ - where is stored basic system logs
- _system-error.log_ - where is stored **catch** system logs (when server stops work)
- _access.log_ - where is stored access logs when who and which endpoint or page try to access
- _access_error.log_ - where is stored problems by access
  
### env folder 

**env** folder have to contain file with **prefix** _**.env**_, in instance .env.example\_ which have to contain following code:

```.env
# Environment variables
NODE_ENV = DEV
PORT = 3000
IP = 127.0.0.1
```

There are two possibilities how to set name of env file. Either by file _config.js_ or _config.json_ file, each in _config folder_
It is necessary to chose which solution you will be use. If you will be use _config.js_, file _system-settings.js_ have to contain following code code.

```javascript
const configVars = require(join(__config, 'config'));
```

And the _config.js_ file looks like (when the environment is example!):

```javascript
module.exports = {
  env: 'example'
};
```

If you would like to use _config.json_ solution, the file (_system-settings.js_) have to contain following code 

```javascript
const configVars = JSON.parse(readFileSync(join(__config, 'config.json')));
```

And the _config.json_ file looks like (when the environment is example!):

```json
{
  "env": "example"
}
```

#### env configuration important NOTE

The configuration of each solution in _system-settings.js_ have to be declared before following lines (because variable configVars is used):

```javascript
// Env variables
require('custom-env').env(configVars.env, __env);
let { NODE_ENV } = process.env;
NODE_ENV = NODE_ENV.toUpperCase();
```

## Project structure

In progress ;)

## install dependencies

```bash
npm install
```

## Run

```bash
npm start
```

## Run dev

```bash
npm run dev
```

### List of dependencies

body-parser, custom-env, ejs, express, morgan, multer

### Version

2.0.0

### Author

kellsoo - kellsoon@gmail.com
