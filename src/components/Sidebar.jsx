import {
  CarIcon,
  GaugeIcon,
  UsersIcon,
  CalendarIcon,
  InstructorIcon,
  StarIcon,
  WalletIcon,
  BellIcon,
} from "./Icons";

const NAV_GROUPS = [
  {
    label: "Overview",
    items: [{ id: "dashboard", label: "Dashboard", icon: GaugeIcon }],
  },
  {
    label: "Operations",
    items: [
      { id: "students", label: "Students", icon: UsersIcon },
      { id: "scheduling", label: "Scheduling", icon: CalendarIcon },
      { id: "instructors", label: "Instructors & Fleet", icon: InstructorIcon },
      { id: "bookings", label: "Online Booking", icon: StarIcon },
    ],
  },
  {
    label: "Business",
    items: [
      { id: "finance", label: "Finance", icon: WalletIcon },
      { id: "reminders", label: "Reminders", icon: BellIcon },
    ],
  },
];

export default function Sidebar({ active, onNavigate }) {
  return (
    <div className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <CarIcon />
        </div>
        <div>
          <div className="brand-name">RouteMaster</div>
          <div className="brand-sub">Driving School OS</div>
        </div>
      </div>

      {NAV_GROUPS.map((group) => (
        <div key={group.label}>
          <div className="nav-section-label">{group.label}</div>
          <div className="nav">
            {group.items.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                className={`nav-item${active === id ? " active" : ""}`}
                onClick={() => onNavigate(id)}
              >
                <Icon />
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="sidebar-foot">
        Riverside Driving Academy
        <br />
        Plan: Standard · 214 students
      </div>
    </div>
  );
}
