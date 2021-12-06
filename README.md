# Weather forecast in realtime using React + Redux

_ This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the project

Deployed version of the app located on https://leonmisha.github.io/test_task_weather_05_12_2021

### Run project locally
2. Use these commands in the project directory:
   - `npm i` or `yarn` to install all dependencies (node_modules)
   - `npm run start` or `yarn start` to run the app
3. Open [http://localhost:3000](http://localhost:3000) in the browser.

## Technical task
```
BRIEF

For this test, we are looking for you to create a simple React SPA. The application
should have the following functionality / features
Create-react-application should be used to bootstrap the application
On the first load a user is asked to allow his location to proceed.
The application uses the user’s location to fetch the current weather using one of the public
apis (you can use https://www.metaweather.com/api/ or similar)
Show the current weather icon in the middle of the screen (centered vertically and
horizontally)
Change the page background color dynamically based on the current temperature shown in
celsius. Use the following colors:
#00ffff for -10 degrees and below
#fff700 for +10 degrees
#ff8c00 for +30 degrees and above
Dynamically calculate the color for the temperature in between.
Allow User to search for the City and display weather for this City
(Must have!) Application architecture should imply these use-cases
(Nice to have!) UI like https://openweathermap.org/find?q=London

STRETCH GOAL

Add a slider to the bottom of the page to adjust the temperature shown on the screen (the
slider should affect the background color as well).
Host the site on heroku, firebase, aws or any other hosting provider of your choice.
Provide a deployment script to deploy the site to the hosting provider of your choice and
instructions on how to use it.

OTHER

Use the React best practices
Use the latest version of the framework
Provide an appropriate .gitignore file
Please keep the git commit history clean and tidy. Commits should be logical and apply to
the single feature / functionality / integration.
Third-party libraries can be used
Make sure the libraries being used have 0 vulnerabilities
We would like to see demonstrable use of best SOLID practises
```

## Deployment
Also you can build the app:
### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!
