# RouteMaster — Driving School Platform (Vite + React)

A UX/UI prototype of a driving school management platform, built with React and Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  main.jsx              entry point
  App.jsx                top-level layout + section routing
  styles.css              global design system (tokens, layout, components)
  data/mockData.js        mock students, instructors, vehicles, invoices, notifications
  components/
    Icons.jsx              shared inline SVG icon set
    Sidebar.jsx             left navigation
    Topbar.jsx              header, search, notification dropdown
    Dashboard.jsx           analytics overview (gauges, charts, activity feed)
    Students.jsx            student table + subtabs
    StudentDetail.jsx       slide-over: hours dial, exam route, skills, docs, history
    Scheduling.jsx          weekly lesson calendar with smart-plan suggestions
    Instructors.jsx         instructor availability + vehicle fleet tabs
    Bookings.jsx            student-facing self-service booking widget
    Finance.jsx             invoices, revenue, subscription plans
    Reminders.jsx           automated notification rules + log
```

All data is mocked in `src/data/mockData.js` — swap it for real API calls when wiring up a backend.
