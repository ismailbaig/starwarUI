# Prototype UI
-------------

This project is developed using Reactjs

# Hightlights to Note:
---------------------

1. Using axion to make the http calls to REST API developed in nodejs as a seperate project
2. axion is used to make ajax calls
3. Three REST API created, and i am calling all three seperatly to take advantage of LAZY LOADING, So that the data which already came from another API need not wait to render until all the API calls are successful
4. Bootstrap used for Responsiveness
5. I have added a login with hardcoded userid and password to ensure minimun security, I could also extend this functionality to introduce JWT (Token based authentication)

# How to RUN:
-------------
 # In DEV Environment
 -------------------
 1. Install NodeJS
 2. Clone or Download this project
 3. run the command 'npm install', this will install all the dependencies
 4. run 'npm start'
 5. This will open the react app on the default port '3000'.
