# Express boilerplate

MVC boilerplate for express with EJS template system

# Warning!

Boilerplate is in progress!!! _And it will be for **very very long time**_ :D

# Project structure

Before first start it is necessary to create **two folders** _env_ and _logs_

**logs** folder should be empty and in default settings it is public folder (can access from browser!).

```javascript
app.use('/logs', express.static(path.join(__dirname, 'logs')));
```

the boilerplate creates four files:

- _system.log_ - where is stored basic system logs
- _system-error.log_ - where is stored **catch** system logs (when server stops work)
- _access.log_ - where is stored access logs when who and which endpoint or page try to access
- _access_error.log_ - where is stored problems by access

**env** folder have to contain file with **prefix** _**.env**_, in instance .env.example\_ which have to contain following code:

```.env
# Environment variables
NODE_ENV = DEV
PORT = 3000
IP = 127.0.0.1
```

If you would like to change entry environment, it is necessary to change _config-env.js_ file in the folder _config_, which looks like

```javascript
let envName = 'example';
require('custom-env').env(envName, __env);
```

The variable _**envName**_ represents the **prefix** of _env file_ in folder _env_, thus if the _.example.env_ is now used, in the variable _**envName**_ has to be stored string 'example'

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
