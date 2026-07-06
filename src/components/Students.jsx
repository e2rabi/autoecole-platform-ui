import { useState } from "react";
import { students, statusChipClass } from "../data/mockData";
import StudentDetail from "./StudentDetail";

const TABS = ["All (214)", "On track", "Behind pace", "Exam ready"];

function progressColor(done, total) {
  const pct = done / total;
  if (pct >= 0.95) return "var(--green)";
  if (pct >= 0.5) return pct >= 0.8 ? "var(--green)" : "var(--amber)";
  return "var(--red)";
}

export default function Students() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [selected, setSelected] = useState(null);

  const visible = students.filter((s) => {
    if (activeTab === "All (214)") return true;
    return s.status === activeTab;
  });

  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <div className="subtabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`subtab${activeTab === t ? " active" : ""}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <button className="btn btn-primary">+ Register student</button>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Package</th>
              <th>Hours progress</th>
              <th>Instructor</th>
              <th>Next lesson</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((s) => {
              const pct = Math.round((s.hoursDone / s.hoursTotal) * 100);
              return (
                <tr className="row" key={s.id} onClick={() => setSelected(s)}>
                  <td>
                    <div className="student-name">{s.name}</div>
                    <div className="substudent">{s.email}</div>
                  </td>
                  <td>{s.package}</td>
                  <td>
                    <div className="odo">
                      <div
                        className="odo-fill"
                        style={{
                          width: `${pct}%`,
                          background: progressColor(s.hoursDone, s.hoursTotal),
                        }}
                      ></div>
                    </div>
                    <div className="odo-label">
                      {s.hoursDone} / {s.hoursTotal} hrs
                    </div>
                  </td>
                  <td>{s.instructor}</td>
                  <td>{s.nextLesson}</td>
                  <td>
                    <span className={`chip ${statusChipClass[s.status]}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <StudentDetail student={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
