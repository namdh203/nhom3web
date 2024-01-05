# Travelam - Simple Travel Web App by Nhóm 3

## How to run our app on [int3306 platform](https://int3306.freeddns.org/)

Open a terminal and run the following commands:

    cd server
    node server

Then open another terminal and run the following command:

    /etc/jupyter/bin/expose 5000

The app will then be accessible at http://fall2324w3g3.int3306.freeddns.org/.

## How to run our app:

### Create Database:

- Import the file [final_scripts.sql](Database/final_scripts.sql) into your local mysql server to create the database.
- Grant access to the database `newtravelnam` to a mysql account.
- In the [/server](/server) directory, create an environment file `.env.local` and copy the fields in `.env.example` into `.env.local`. Type in your mysql hostname and the mysql account that has been granted access to the `newtravelnam` database.

### Install packages:

Install root packages:

- Open a terminal at the root directory
- If you haven't installed packages yet, run command `npm install`

Install backend (expressjs) packages:

- At root, run command `cd server`
- If you haven't installed packages yet, run command `npm install`

Install frontend (react) packages:

- Open new terminal tab
- At root, run command `cd client`
- If you haven't installed packages yet, run command `npm install`

How to change port:

- Change the port value (default to `5000`) in [/server/server.js](/server/server.js)
- In [/client/package.json](/client/package.json), there is "proxy" key, change the port value in the server URL.

Run website:

- At root, run command `npm start-root`.
- If that doesn't work, try run these two commands: `npm start-server` and `npm start-client` in two different terminals.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
