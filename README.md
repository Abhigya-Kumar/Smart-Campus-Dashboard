# Smart Campus Dashboard
**Assignment: Customizable Dashboard Application**

---

## 1. What the application does

The Smart Campus Dashboard is a customizable web application designed to help students manage and visualize academic and campus-related information in one place.

The application allows users to add, remove, configure, and rearrange widgets such as attendance, assignments, timetable, study hours, exam countdowns, fee status, and campus announcements.  
The goal of the application is to demonstrate how a flexible dashboard system can be built using reusable components and dynamic configuration.

---

## 2. How the dashboard and widgets work

The dashboard acts as a container for multiple independent widgets.

Each widget:
- Represents a specific feature (e.g., Attendance, Timetable, Study Hours)
- Is rendered dynamically based on its type
- Can be added or removed by the user
- Can be reordered using drag-and-drop

The dashboard does not directly control widget logic. Instead:
- The dashboard manages layout and order
- Each widget handles its own display and behavior

This modular approach makes the dashboard flexible and easy to extend with new widgets.

---

## 3. How configuration is stored and applied

Each widget has its own configuration object that controls how it behaves.

Examples:
- Attendance widget stores selected subject
- Study Hours widget stores range (weekly or monthly)
- Exam Countdown widget stores the selected exam date
- Announcements widget stores category filters and item limits

The complete dashboard state (widget order, configuration, and data) is stored in MongoDB using an Express backend API.

Data flow:

On page load, the frontend fetches the saved dashboard configuration from the backend and restores the layout exactly as it was.

---

## 4. How the frontend is structured

The frontend is built using React and follows a component-based structure.

Main structure:
- `components/` – Dashboard and widget components
- `context/` – Global dashboard state using Context API
- `hooks/` – Custom hooks for reusable logic
- `utils/` – Helper functions
- `api/` – Backend API communication logic

Widgets are kept separate from dashboard logic to maintain clean separation of concerns and improve maintainability.

---

## 5. Design and technical decisions

Key design decisions made in this project:

- **Component-based architecture** to promote reusability
- **Widget-driven design** where each widget is independent
- **Backend-only persistence** to keep data consistent
- **No authentication** to keep the project assignment-focused
- **Drag-and-drop reordering** for better user experience
- **Tailwind CSS** for rapid and consistent UI styling

The backend is implemented using Express and MongoDB Atlas to simulate a real-world full-stack application.

---

## 6. What could be improved with more time

If more time were available, the following improvements could be made:

- User authentication and multiple dashboards
- Offline support using localStorage fallback
- Real academic data integration instead of mock data
- Role-based dashboards for students and faculty
- Advanced analytics and charts
- Improved accessibility and theming options

---

## Live Demo Links

Frontend: https://smartcampusdashboard.vercel.app  
Backend API: https://smart-campus-dashboard-1-2pm9.onrender.com/api/dashboard

---

## Conclusion

The Smart Campus Dashboard demonstrates a modular dashboard system with configurable widgets, persistent storage, and a clean separation between frontend and backend.  
The project showcases practical use of modern web development tools and real-world application architecture.
