import { useState } from "react";

const DEFAULT_RULES = [
  { id: "lesson", label: "Lesson reminder — 24h before", on: true },
  { id: "payment", label: "Payment due reminder", on: true },
  { id: "doc", label: "Document expiry alert", on: true },
  { id: "exam", label: "Exam date reminder", on: false },
  { id: "vehicle", label: "Vehicle service alert (staff only)", on: true },
];

export default function Reminders() {
  const [rules, setRules] = useState(DEFAULT_RULES);

  function toggle(id) {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, on: !r.on } : r)),
    );
  }

  return (
    <section>
      <div className="grid grid-2">
        <div className="card">
          <div className="card-title" style={{ marginBottom: 6 }}>
            Automated reminders
          </div>
          {rules.map((r) => (
            <div className="toggle-row" key={r.id}>
              <span>{r.label}</span>
              <button
                className={`switch${r.on ? " on" : ""}`}
                onClick={() => toggle(r.id)}
                aria-label={`Toggle ${r.label}`}
              ></button>
            </div>
          ))}
        </div>
        <div className="card">
          <div className="card-title" style={{ marginBottom: 10 }}>
            Recent notification log
          </div>
          <div className="activity">
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--green)" }}
              ></div>
              <div>
                <div>
                  Lesson reminder sent to <b>8 students</b>
                </div>
                <div className="activity-time">Today, 07:00</div>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--amber)" }}
              ></div>
              <div>
                <div>
                  Payment reminder sent to <b>Karim Belhadj</b>
                </div>
                <div className="activity-time">Yesterday, 18:00</div>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--red)" }}
              ></div>
              <div>
                <div>
                  Document expiry alert — <b>medical certificate</b>
                </div>
                <div className="activity-time">Yesterday, 09:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
