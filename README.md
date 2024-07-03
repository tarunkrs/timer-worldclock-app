# Demo of World Clock & Countdown Timer
Next.js app that has a countdown timer and world clock.

### Prerequisite
   - NodeJS - v18.17.1
   - MongoDB - 7.0.11

### Project Structure
1. Frontend: Next.js for the user interface.
2. Backend: Next.js API routes for handling CRUD operations with MongoDB.
3. Database: MongoDB to store timer information.

### Features

#### Countdown Timer:

1. Start a countdown timer.
2. Add/Remove timers to/from a list.
3. Display each timer with progress.
4. Store timer details in MongoDB.

#### World Clock:

1. Select a time zone (PST/IST).
2. Display current time for the selected time zone using an Internet Time API.

## Getting Started

### Installation
  
```bash
# 1. To clone reporepository
git clone https://github.com/tarunkrs/timer-worldclock-app.git
# 2. Nevigate to directory
cd timer-worldclock-app
# 3. To Install dependencies
npm install
# 4. To start the application
npm run dev
```
#### Dependencies
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

#### To verify UI

   URL: http://localhost:3000

#### To verify the APIs 

   URL: http://localhost:3000/api/timers

### Support

Please support by starring this project.

### License

This project is licensed under the MIT License. For more information, refer to the LICENSE file.


 

