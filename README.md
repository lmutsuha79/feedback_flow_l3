# Feedback Flow

## description

The project idea is to create a web application that helps app owners on Google Play to improve their application based on customer reviews and ratings. The application will collect customer reviews and ratings and perform sentiment analysis on them to determine customer satisfaction levels. The application will also use topic modeling to identify the most commonly mentioned features or issues in the reviews. The results of the analysis will then be presented to the app owners in an easy-to-understand format, along with suggested updates and improvements to the application based on the feedback. Overall, the goal of the application is to help app owners make data-driven decisions to improve their applications and increase customer satisfaction.

## features I'm currently working on (To-Dos)

- login/registration (google provider with next-auth) --> (ok)
- let the user register a new app to analyze --> (ui ok / db ok )
- get all (reviews and feedback) for a new app (web scraping) --> (ok)
- protect the dashboard from unauthenticated users --> (ok)
- display the user information in the dashboard --> (ok)
- the problem of logout --> (ok)
- add a loading screen to the dashboard --> (ok)
- add toast notifications to the app --> (ok)
- list the apps of the user in the navbar and let the user select the app. --> (ok)
- display the data of the app in the dashboard (about the app) --> (ok)
- add multi-tabs in the header of the dashboard --> (ok)
- get all the reviews for an app and show them in the dashboard --> (ok)
- save the current selected app in the local storage --> (ok)

================================================================

## bugs I know about them

- new user crates new app --> (fixed)
- Some app icons don't work (the solution is to try to save the icon inside the DB in a separate column) --> (fixed)
- Sometimes the icon of the profile doesn't appear --> (fixed)
- when a user add-new app the right drop-down menu for adding and selecting apps will disappear --> (fixed)

## up upcoming features and updates

- save the apps of the user inside the local storage
- save user info in the local storage
- dark/light mode
