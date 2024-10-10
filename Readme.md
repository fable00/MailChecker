# MailChecker
A test project made with React and Node, fully implemented in Typescript

# How to run
First of all you will need to install the tool that in needed run the project locally, in this case it is NodeJS, that can be found in the link above

[node](https://nodejs.org/)

Follow the pages instructions to know how to get NodeJS set in your computer

Since that point you will just need follow the steps above to get all working

# Settings
Fisrt you must clone the repository and enter in it
```
git clone https://github.com/fable00/MailChecker && cd MailChecker
```

Then you need define your MailTrap/SMTP credentials and rename .env.template to .env

```
cd ./server

```
```
#.env.template file

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
EMAIL_FROM=

```

```
mv env.template .env 
```
Then in the same folder you need run the following commands to start the server-side

```
npm install
```
```
npm start
```

If all is correct you should see 'Server Running at 8080'

Now in client side
```
cd ../client/
```
```
npm install
```
```
npm run dev
```
And now all should be working at [localhost](http://localhost:5173)



