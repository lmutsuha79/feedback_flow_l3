# Feedback Flow

![FeedbackFlow](/public//images/logo-black-mini.png)

## Description

================================================================

The project idea is to create a web application that helps app owners on Google Play to improve their application based on customer reviews and ratings.
The application will collect customer reviews and ratings and perform sentiment analysis on them to determine customer satisfaction levels.
The application will also use topic modeling to identify the most commonly mentioned features or issues in the reviews.
The results of the analysis will then be presented to the app owners in an easy-to-understand format, along with suggested updates and improvements to the application based on the feedback.
Overall, the goal of the application is to help app owners make data-driven decisions to improve their applications and increase customer satisfaction.

================================================================

## Beta Version

The beta version is available. You can check it out [here](https://feedback-flow-l3.vercel.app) (opens in a new window).

================================================================

## How to Install:

- Clone the repository
- CD into the repository
- Run `npm install`
- Add Supabase Google provider authentication by following this [documentation](https://supabase.com/docs/guides/auth/social-login/auth-google) (opens in a new window)
- Create the `.env` file
- Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` values
- Run `npm run dev` to run the local dev server.

================================================================

## Features I'm Currently Working On (To-Dos)

- user page
- pie chart problem

================================================================

## Features I'm Done Working On (Done!)

- Login/registration (Google provider with next-auth) --> (ok)
- Let the user register a new app to analyze --> (UI ok / DB ok)
- Get all (reviews and feedback) for a new app (web scraping) --> (ok)
- Protect the dashboard from unauthenticated users --> (ok)
- Display the user information in the dashboard --> (ok)
- The problem of logout --> (ok)
- Add a loading screen to the dashboard --> (ok)
- Add toast notifications to the app --> (ok)
- List the apps of the user in the navbar and let the user select the app. --> (ok)
- Display the data of the app in the dashboard (about the app) --> (ok)
- Add multi-tabs in the header of the dashboard --> (ok)
- Get all the reviews for an app and show them in the dashboard --> (ok)
- Save the currently selected app in the local storage --> (ok)
- Add filter methods on the reviews table --> ok
- Refactor the table-reviews component --> (ok)
- The problem of duplication when adding a flag to db --> (solved)
- Display a flag that indicates whether a review is a bug or a feature or not yet set --> (ok)
- add feature flag to rows -> (ok)
- create bugs and feature page --> (ok)
- add remove bugs and feature functionality --> (ok)
- redirect user to reviews page when select other app or creates new one to solve old reviews problem --> (ok)
- delete apps --> (ok)
- footer component --> (ok)
- landing page --> (ok)
- download reviews button functionality --> (ok)
- about page --> (ok)

================================================================

## Bugs and Enhancements

- Let the user have the ability to resize the table column width on the reviews page.
- Try to move all the apps of users and selected app index and all the states that trigger unnecessary re-render of the top nav bar into the global state to prevent that.
- New user creates a new app --> (fixed)
- Some app icons don't work (the solution is to try to save the icon inside the DB in a separate column) --> (fixed)
- Sometimes the icon of the profile doesn't appear --> (fixed)
- When a user adds a new app, the right drop-down menu for adding and selecting apps will disappear --> (fixed)

================================================================

## Upcoming Features and Updates

- Save the apps of the user inside the local storage
- Save user info in the local storage
- Dark/light mode
