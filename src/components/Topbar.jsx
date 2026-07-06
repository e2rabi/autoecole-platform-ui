import { useState } from "react";
import { SearchIcon, BellIcon } from "./Icons";
import { notifications } from "../data/mockData";

const TITLES = {
  dashboard: ["Dashboard", "Monday, July 6 — school-wide overview"],
  students: ["Students", "Registration, files, progress and history"],
  scheduling: ["Scheduling", "Smart planning for theory & driving lessons"],
  instructors: [
    "Instructors & Fleet",
    "Assignments, availability and vehicle upkeep",
  ],
  bookings: ["Online Booking", "Preview of the student self-service flow"],
  finance: ["Finance", "Payments, invoices, subscriptions and plans"],
  reminders: ["Reminders", "Automated notification rules and activity"],
};

export default function Topbar({ active }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [title, subtitle] = TITLES[active];

  return (
    <div className="topbar">
      <div>
        <div className="page-title">{title}</div>
        <div className="page-sub">{subtitle}</div>
      </div>
      <div className="topbar-right">
        <div className="search-box">
          <SearchIcon />
          Search students, lessons…
        </div>
        <button className="icon-btn" onClick={() => setNotifOpen((v) => !v)}>
          <BellIcon />
          <span className="dot-badge"></span>
        </button>
        <div className="avatar">AD</div>
      </div>

      <div className={`notif-panel${notifOpen ? " active" : ""}`}>
        {notifications.map((n, i) => (
          <div className="notif-item" key={i}>
            {n.color} <div>{n.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
