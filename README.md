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

**env** folder have to contain file with extension _**.env**_, in instance example.env

```.env
# Environment variables
PORT = 3000
IP = 127.0.0.1
```

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

1.0.0

### Author

kellsoo - kellsoon@gmail.com
