# Demo of World Clock & Countdown Timer
Next.js app that has a countdown timer and world clock.

# Project Structure
- Frontend: Next.js for the user interface.
- Backend: Next.js API routes for handling CRUD operations with MongoDB.
- Database: MongoDB to store timer information.

# Features
Countdown Timer:

- Start a countdown timer.
- Add/Remove timers to/from a list.
- Display each timer with progress.
- Store timer details in MongoDB.

World Clock:

- Select a time zone (PST/IST).
- Display current time for the selected time zone using an Internet Time API.

## Prerequisite

   - NodeJS - Node v18.17.1

 ## Clone codebase
  
   - Run > git clone  [path](https://github.com/phptarun/timer-worldclock-app)

   - Run > git checkout main

  

 ## Dependencies
  ```JSON
    {  
        "dependencies": {
            "axios": "^1.7.2",
            "date-fns": "^2.29.3",
            "gray-matter": "^4.0.3",
            "mongodb": "^6.7.0",
            "next": "latest",
            "react": "18.2.0",
            "react-dom": "18.2.0",
            "remark": "^14.0.2",
            "remark-html": "^15.0.1"
        }
    }
  ```
 
 ## Once clone is successful, to install required modules

   - Run > npm install 

   - Run > npm run dev

## To verify UI

   URL: http://localhost:3000/api/timers

## To verify the APIs 

   URL: http://localhost:3000

 

