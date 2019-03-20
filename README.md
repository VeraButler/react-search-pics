# Simple React Picture App
An application for displaying pictures of different sizes.

## To Run
git clone https://github.com/verabutler/react-pics
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
. AJAX Client
    - [axios](https://www.npmjs.com/package/axios) -> 3rd party package
    - vs fetch -> function built intio modern browsers
. [Unsplash API](https://www.unpslash.com/developers)

<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
