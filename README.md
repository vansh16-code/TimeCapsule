# Time Capsule React App

A simple React app that lets users create "time capsules" — messages locked until a future unlock date. The app uses JSON Server as a backend to store capsules with unlock times.

---

## Features

- Create a message with a future unlock date/time
- Messages remain locked until their unlock time passes
- View messages by their unique ID
- Delete messages after unlocking (optional feature)
- Responsive UI with Bootstrap styling

---

## Tech Stack

- React (with React Router)
- JSON Server (fake REST API backend)
- Bootstrap 5 for styling
- Day.js for date handling

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- `json-server` installed globally or as a dev dependency

```bash
npm install -g json-server
Setup Backend (JSON Server)
Create a db.json file in the project root with the following structure:

json
Copy code
{
  "capsules": []
}
Start JSON Server:

bash
Copy code
json-server --watch db.json --port 3001
This will run the fake API at http://localhost:3001.

Setup Frontend (React)
Install dependencies:

bash
Copy code
npm install
Start React development server:

bash
Copy code
npm start
Access the app at http://localhost:3000.

Usage
Use the form to create a new time capsule message and set the unlock date/time.

After submission, you'll be redirected to the message view page.

Messages remain locked until the specified unlock time.

Once unlocked, you can read or delete your message.

Folder Structure
pgsql
Copy code
my-timecapsule-app/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── db.json
├── package.json
└── README.md
Notes
The backend uses JSON Server, so data is stored in db.json.

The app expects JSON Server to run on port 3001.

Unique message IDs are generated with timestamps (Date.now()) or UUIDs.

Make sure your browser and React app are running on different ports (default React: 3000).

License
This project is open source and available under the MIT License.

Feel free to contribute or raise issues!
