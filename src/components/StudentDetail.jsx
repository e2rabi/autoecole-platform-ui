const ROUTE_LABELS = [
  "Theory test",
  "Practice hours",
  "Mock exam",
  "Road test",
];
const DOC_CHIP = {
  Verified: "chip-green",
  "Pending upload": "chip-amber",
};

export default function StudentDetail({ student, onClose }) {
  const active = !!student;

  // Fall back to a blank shape so hooks/markup stay stable even before a student is picked
  const s = student || {
    name: "",
    instructor: "",
    enrolled: "",
    hoursDone: 0,
    hoursTotal: 1,
    route: [],
    skills: [],
    documents: [],
    history: [],
  };

  const pct = s.hoursTotal ? s.hoursDone / s.hoursTotal : 0;
  // semi-circle arc length ~267 (matches r=85 quarter+ path used below), offset shrinks as pct grows
  const arcLength = 267;
  const dashOffset = Math.max(0, arcLength - arcLength * pct);
  const needleAngle = -90 + pct * 180; // -90deg (left) to +90deg (right)

  return (
    <>
      <div
        className={`overlay${active ? " active" : ""}`}
        onClick={onClose}
      ></div>
      <div className={`slide-over${active ? " active" : ""}`}>
        <div className="so-head">
          <div>
            <div
              style={{
                fontSize: 11,
                color: "#B9BEC2",
                letterSpacing: ".08em",
                textTransform: "uppercase",
              }}
            >
              Student file
            </div>
            <h2 style={{ color: "#fff", marginTop: 4 }}>{s.name}</h2>
            <div style={{ fontSize: 12, color: "#B9BEC2", marginTop: 4 }}>
              Enrolled {s.enrolled} · Instructor: {s.instructor}
            </div>
          </div>
          <button className="so-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="so-body">
          <div className="dial-wrap">
            <svg className="dial" viewBox="0 0 190 105">
              <path
                d="M10 100 A85 85 0 0 1 180 100"
                fill="none"
                stroke="#E3DFD5"
                strokeWidth="14"
                strokeLinecap="round"
              />
              <path
                d="M10 100 A85 85 0 0 1 180 100"
                fill="none"
                stroke="var(--green)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={arcLength}
                strokeDashoffset={dashOffset}
              />
            </svg>
            <div
              className="dial-needle"
              style={{ transform: `rotate(${needleAngle}deg)` }}
            ></div>
            <div className="dial-center-label">
              <div className="dial-num">
                {s.hoursDone}
                <span style={{ fontSize: 13 }}>/{s.hoursTotal}h</span>
              </div>
              <div className="dial-sub">Driving hours logged</div>
            </div>
          </div>

          <hr className="lane-divider" />

          <div className="card-title" style={{ marginBottom: 10 }}>
            Exam readiness route
          </div>
          <div className="route">
            {ROUTE_LABELS.map((label, i) => (
              <div className={`route-node ${s.route[i] || ""}`} key={label}>
                <div className="route-circle">
                  {s.route[i] === "done" ? "✓" : i + 1}
                </div>
                {i < ROUTE_LABELS.length - 1 && (
                  <div className="route-line"></div>
                )}
                <div className="route-label">{label}</div>
              </div>
            ))}
          </div>

          <hr className="lane-divider" />

          <div className="card-title" style={{ marginBottom: 6 }}>
            Skill evaluation
          </div>
          {s.skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <span className="skill-name">{skill.name}</span>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} className={i < skill.level ? "on" : ""}></span>
                ))}
              </div>
            </div>
          ))}

          <hr className="lane-divider" />

          <div className="card-title" style={{ marginBottom: 6 }}>
            Documents
          </div>
          {s.documents.map((doc) => (
            <div className="doc-row" key={doc.name}>
              <span>{doc.name}</span>
              <span className={`chip ${DOC_CHIP[doc.status] || "chip-amber"}`}>
                {doc.status}
              </span>
            </div>
          ))}

          <hr className="lane-divider" />

          <div className="card-title" style={{ marginBottom: 6 }}>
            Training history
          </div>
          <div className="activity">
            {s.history.map((h, i) => (
              <div className="activity-item" key={i}>
                <div
                  className="activity-dot"
                  style={{ background: `var(--${h.color})` }}
                ></div>
                <div>
                  <div>{h.text}</div>
                  <div className="activity-time">{h.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
            <button
              className="btn btn-dark"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Schedule lesson
            </button>
            <button
              className="btn btn-ghost"
              style={{ flex: 1, justifyContent: "center" }}
            >
              Edit file
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
