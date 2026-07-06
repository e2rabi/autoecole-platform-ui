import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Scheduling from "./components/Scheduling";
import Instructors from "./components/Instructors";
import Bookings from "./components/Bookings";
import Finance from "./components/Finance";
import Reminders from "./components/Reminders";

const SECTIONS = {
  dashboard: Dashboard,
  students: Students,
  scheduling: Scheduling,
  instructors: Instructors,
  bookings: Bookings,
  finance: Finance,
  reminders: Reminders,
};

export default function App() {
  const [active, setActive] = useState("dashboard");
  const ActiveSection = SECTIONS[active];

  return (
    <div className="app">
      <Sidebar active={active} onNavigate={setActive} />
      <div className="main">
        <Topbar active={active} />
        <div className="content">
          <ActiveSection />
        </div>
      </div>
    </div>
  );
}
