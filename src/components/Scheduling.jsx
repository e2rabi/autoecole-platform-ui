import { Fragment } from "react";

const DAYS = ["Mon 6", "Tue 7", "Wed 8", "Thu 9", "Fri 10", "Sat 11"];

// grid: rows are time slots, cols are days (index matches DAYS)
const GRID = [
  {
    time: "08:00",
    cells: [
      { type: "driving", text: "Nora K. · Driving", sub: "Marc D." },
      null,
      { type: "theory", text: "Theory: Signage", sub: "Room A" },
      null,
      { type: "suggest", text: "Suggested slot" },
      null,
    ],
  },
  {
    time: "09:00",
    cells: [
      null,
      { type: "driving", text: "Amélie V. · Driving", sub: "Sophie L." },
      { type: "driving", text: "Karim B. · Driving", sub: "Sophie L." },
      { type: "suggest", text: "Suggested slot" },
      null,
      { type: "theory", text: "Theory: Priority", sub: "Room A" },
    ],
  },
  {
    time: "10:00",
    cells: [
      { type: "theory", text: "Theory: Signage", sub: "Room A" },
      null,
      null,
      { type: "driving", text: "Léa F. · Mock exam", sub: "Marc D." },
      null,
      null,
    ],
  },
  {
    time: "11:00",
    cells: [
      null,
      { type: "driving", text: "Amélie V. · Driving", sub: "Sophie L." },
      null,
      null,
      { type: "suggest", text: "Suggested slot" },
      null,
    ],
  },
];

const CLASS_MAP = {
  driving: "lb-driving",
  theory: "lb-theory",
  suggest: "lb-suggest",
};

export default function Scheduling() {
  return (
    <section>
      <div className="cal-toolbar">
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-ghost btn-sm">‹ Prev week</button>
          <button className="btn btn-ghost btn-sm">Next week ›</button>
          <span style={{ fontWeight: 700, marginLeft: 6 }}>Jul 6 – Jul 11</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-ghost btn-sm">
            Filter: All instructors
          </button>
          <button className="btn btn-primary btn-sm">
            ✨ Smart-plan open slots
          </button>
        </div>
      </div>

      <div className="cal-grid">
        <div
          className="cal-head"
          style={{ background: "transparent", border: "none" }}
        ></div>
        {DAYS.map((d) => (
          <div className="cal-head" key={d}>
            {d}
          </div>
        ))}

        {GRID.map((row) => (
          <Fragment key={row.time}>
            <div className="cal-time">{row.time}</div>
            {row.cells.map((cell, i) => (
              <div className="cal-cell" key={`${row.time}-${i}`}>
                {cell && (
                  <div className={`lesson-block ${CLASS_MAP[cell.type]}`}>
                    {cell.text}
                    {cell.sub && (
                      <>
                        <br />
                        {cell.sub}
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </Fragment>
        ))}
      </div>

      <div className="grid grid-2" style={{ marginTop: 18 }}>
        <div className="card">
          <div className="card-title" style={{ marginBottom: 10 }}>
            Unassigned booking requests
          </div>
          <div className="doc-row">
            <span>Yanis Roche — wants Theory, prefers mornings</span>
            <button className="btn btn-ghost btn-sm">Assign</button>
          </div>
          <div className="doc-row" style={{ borderBottom: "none" }}>
            <span>New student — Driving, no preference</span>
            <button className="btn btn-ghost btn-sm">Assign</button>
          </div>
        </div>
        <div className="card">
          <div className="card-title" style={{ marginBottom: 10 }}>
            Smart planning notes
          </div>
          <p
            style={{
              fontSize: 12.5,
              color: "var(--steel)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            The planner cross-checks instructor availability, vehicle
            assignment, and each student's remaining hours to surface
            conflict-free slots — highlighted in green above.
          </p>
        </div>
      </div>
    </section>
  );
}
