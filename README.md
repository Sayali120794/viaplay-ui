## How to run the application-

1. Use npm start command to run the application.
2. If any other application is already running on default port 3000, you will be asked if you want to run the code on other port. press "y" and click enter. Your application will run on different port.
3. Use npm intall to add any new library.

## How to use the application-

1. Enter the movie name, image url and description in the 3 text boxes given respectively.
2. Your movie will be added to the watchlist. You can refer that watchlist in future to decide any movie to watch from the list.
3. After you click on the movie title from watchlist the movie details will be added to already watched movie only once.
4. You can remove any movie from the Already Watched List by clicking on the movie title.

## Code Changes Made:

1. I have devided the whole application in three parts and aaded their functionality as three different components.
2. I have made seperate file data.js to store the default data. We can any new data in future in this file and also reuse it other components.
3. I have used index.js file only for rendering purpose.
4. I have used only one local storage to save the data and updated it according to the need.
5. I have used bootstrap to style the application.
6. I have used flexbox instead of </br> tag to align the application properly.
7. I have used separate stylesheet instead of inline css and also kept all the common css properties in index.css file.
8. I have used the lasted concepts of React like functional components, react hooks.
9. I have also applied some validations to the add movie form.
10. I have avoided to use reducer, redux libraries to keep the application as simple as possible as per the instructions and also to save time.

## TODO-

1. Can use store to store the data and redux for better performance.
2. Can add test cases.

## JS/React app cleanup

Jenny is a newbie developer that has decided to learn Javascript and React. She wrote this simple application to keep track of which movies she wants to see, and which ones she has seen.

She knows it is not great, and she has now asked you to take a look at it, to give feedback and pointers. She also wants to see how she could have done it in a better way.

### Your task:

1. **Create a git repo using this code.**
2. **Add one commit with in-code comments, pointing out any bad patterns or strange choices made.**
3. **Add any number of commits to make the application maintainable and better looking.**
4. **Add any relevant instructions to run the app in the README.**
5. **Push code to any git hosting providers like github or gitlab. Share the repo with us.**

Do not spend more than two hours on this assignment. Keep it simple!

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
