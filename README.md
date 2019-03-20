# Simple React Picture App
An application for displaying pictures of different sizes.

## To Run
git clone https://github.com/verabutler/react-pics

add a config.js file to main folder
include this code and save
```
export const auth = {
    "unsplashID":"your unsplash id"
}
```
npm install
npm start

## Skills Learned
1. Component Design
2. Project Structure
3. Showing forms to the user
4. Creating Event Handlers
    - alternate event handler syntax
    - form submittal
5. Uncontrolled vs Controlled Elements
    - Uncontrolled -> no state and event handlers => data stored in DOM
    - Controlled -> with state and event handlers => data stored in component
6. `this`
    - Uncaught TypeError: Cannot read property 'myproperty' of undefinded at `<anonymous>`
        - this == undefined => to know what this is equal to look for the method call 
          not the method class itself
7. AJAX Client
    - [axios](https://www.npmjs.com/package/axios) -> 3rd party package
    - vs fetch -> function built intio modern browsers
    - [Async Await](https://javascript.info/async-await)
        - aysnc fxn() { const response = await axios.get {fetch....console.log(response.data.whatever)}}
            - same thing as .then
        - TypeError: setState() is not a fuction ==> make function an arrow function!
8. [Unsplash API](https://www.unpslash.com/developers)
9. Image map()
    - required for re-render: key value to each mapped element
10. [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
    - grid-tamplate-columns, grid-gap, grid-auto-rows
11. Create Image Card Component
12. [React Refs](https://reactjs.org/docs/refs-and-the-dom.html)
    - gives access to a single DOM element
    - create in constructor -> assign to instance vars -> pass to JSX element as props
13. Callbacks on load

<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
