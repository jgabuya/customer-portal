# Customer Portal Frontend

A progressive web app (pwa) frontend for the customer portal web app.

## How to start

Within this directory, run the following commands:

 ```shell
 yarn
 yarn start
 ```
 
 or
 
 ```shell
 npm install
 npm start
 ```

 Note: Either `npm` or `yarn` works but `yarn` will be used throughout this document.

 Once the app is running, you can view it in your browser: [http://localhost:3000/](`http://localhost:3000/`)

## Developing

### Built With
* [React 16](https://reactjs.org/) using [create-react-app](https://github.com/facebookincubator/create-react-app)
* [React Router](https://github.com/ReactTraining/react-router)
* [ES6](https://www.ecma-international.org/ecma-262/6.0/)

### Prerequisites
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/en/) (Optional)

### Workflow

**Writing Components**

1. Create test suite that fails initially
2. Make test suite pass by creating barebones components
3. Complete component implementation, make sure test suite is still passing

**Component Structure**

Components are organized following this [guide](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1).

**Git**

This repo follows a simple [Git workflow](https://www.atlassian.com/blog/git/simple-git-workflow-simple)

### Building

Run `yarn build` on this repo's root directory.

> Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

> The build is minified and the filenames include the hashes. By default, it also includes a service worker so that your app loads from local cache on future visits.

> Your app is ready to be deployed.

More info [here](https://github.com/facebookincubator/create-react-app#npm-run-build-or-yarn-build).

## Routes

This app implements a declarative routing style using [react-router](https://github.com/ReactTraining/react-router). Instead of _Static Routing_ where routes are declared in a config file before rendering takes place, `react-router` implements _Dynamic Routing_ which takes place as the app is rendering, not in a configuration or convention outside of the running app. 

More info [here](https://reacttraining.com/react-router/core/guides/philosophy)

* **Sign in (Default)** `/`
* **Dashboard** `/dashboard`
* **Profile** `/profile`    
* **Transactions** `/transactions`
* **Sign out** `/sign-out`   

## Tests

Run `yarn test` from this repo's root directory.

> Runs the test watcher in an interactive mode.

> By default, runs tests related to files changed since the last commit.

More info [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

## Future additions

Due to limited time and the nature of this app, some features/functionality have been left out. It would be nice to have them implemented in the future.

* Proper authentication
* Persistent backend data storage