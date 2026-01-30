# Smart Campus Dashboard

A customizable **Smart Campus Dashboard** built using **React**, **Tailwind CSS**, **Express**, and **MongoDB**.  
The dashboard allows students to manage academic and campus-related information through configurable widgets.

---

## Live Demo

Frontend: https://smartcampusdashboard.vercel.app  
Backend API: https://smart-campus-dashboard-1-2pm9.onrender.com/api/dashboard


## Features

- Modular, configurable widgets:
  - Attendance
  - Assignment Tracker
  - Timetable
  - Study Hours Chart
  - Exam Countdown
  - Campus Announcements
  - Fee Status
  - Subject Performance

- Widget-specific configuration (dropdowns, date pickers, toggles)
- Drag-and-drop widget reordering
- Dashboard layout and configuration persistence
- Clean and responsive UI with Tailwind CSS
- Backend integration using Express and MongoDB

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Context API
- @dnd-kit (Drag & Drop)
- Recharts
- lucide-react

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## Project Structure

```

smart-campus-dashboard/
│
├── backend/
│   ├── models/
│   │   └── Dashboard.js
│   ├── routes/
│   │   └── dashboard.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── utils/
│   ├── api/
│   └── App.jsx
│
├── index.html
├── package.json
└── README.md
```
 
---

## Setup Instructions

### Prerequisites
- Node.js (v16 or above)
- MongoDB (local or MongoDB Atlas)

---

## Data Persistence

The dashboard state (widget layout, configuration, and data) is stored in MongoDB using an Express API.

The backend acts as the single source of truth.  
The backend server must be running for dashboard data to load and persist.

---

## Design Decisions

- Backend-only persistence for simplicity and data consistency
- Widget-based, configuration-driven architecture
- No authentication to keep the project assignment-focused
- Mock data used where real APIs are not required

---

## Limitations

- Backend must be running for data to load
- No user authentication or multi-user support
- Single dashboard instance

---

## Future Enhancements

- User authentication and multiple dashboards
- Offline fallback using localStorage
- Integration with real academic data sources
- Cloud deployment

---

## Conclusion

The **Smart Campus Dashboard** demonstrates modular UI design, state management, backend integration, and real-world dashboard patterns using modern web technologies.

