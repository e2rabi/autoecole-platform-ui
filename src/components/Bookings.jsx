import { useState } from "react";

const SLOTS = [
  { time: "08:00", taken: false },
  { time: "09:00", taken: true },
  { time: "11:00", taken: false },
  { time: "14:00", taken: false },
  { time: "15:00", taken: true },
  { time: "16:00", taken: false },
];

export default function Bookings() {
  const [lessonType, setLessonType] = useState("Driving lesson");
  const [instructor, setInstructor] = useState("Any available");
  const [slot, setSlot] = useState("11:00");

  return (
    <section>
      <div className="chip chip-blue" style={{ marginBottom: 14 }}>
        Student-facing view
      </div>
      <div className="booking-frame">
        <h3 style={{ fontSize: 18, marginBottom: 4 }}>Book a session</h3>
        <p style={{ fontSize: 12, color: "var(--steel)", margin: "0 0 16px" }}>
          Riverside Driving Academy
        </p>

        <div className="seg">
          {["Driving lesson", "Theory class"].map((t) => (
            <button
              key={t}
              className={`seg-btn${lessonType === t ? " active" : ""}`}
              onClick={() => setLessonType(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="field-label">Instructor</div>
        <div className="slot-chips">
          {["Any available", "Marc D.", "Sophie L."].map((name) => (
            <span
              key={name}
              className={`slot-chip${instructor === name ? " picked" : ""}`}
              onClick={() => setInstructor(name)}
            >
              {name}
            </span>
          ))}
        </div>

        <div className="field-label">Thursday, July 9</div>
        <div className="slot-chips">
          {SLOTS.map((s) => (
            <span
              key={s.time}
              className={`slot-chip${s.taken ? " taken" : slot === s.time ? " picked" : ""}`}
              onClick={() => !s.taken && setSlot(s.time)}
            >
              {s.time}
            </span>
          ))}
        </div>

        <hr className="lane-divider" style={{ margin: "18px 0" }} />
        <div
          style={{ fontSize: 12.5, color: "var(--steel)", marginBottom: 14 }}
        >
          Vehicle auto-assigned based on availability · Clio 4
        </div>
        <button
          className="btn btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
        >
          Confirm booking — {slot}
        </button>
      </div>
    </section>
  );
}
