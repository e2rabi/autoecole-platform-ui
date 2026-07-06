import { useState } from "react";
import { instructors, vehicles } from "../data/mockData";

const AVAIL_CHIP = {
  Available: "chip-green",
  "Nearly full": "chip-amber",
};
const VEHICLE_CHIP = {
  Active: "chip-green",
  "In service": "chip-amber",
  "Due for service": "chip-red",
};

function heatClass(level) {
  if (level === 0) return "";
  return `busy${level}`;
}

export default function Instructors() {
  const [tab, setTab] = useState("instructors");

  return (
    <section>
      <div className="subtabs">
        <button
          className={`subtab${tab === "instructors" ? " active" : ""}`}
          onClick={() => setTab("instructors")}
        >
          Instructors
        </button>
        <button
          className={`subtab${tab === "fleet" ? " active" : ""}`}
          onClick={() => setTab("fleet")}
        >
          Vehicles
        </button>
      </div>

      {tab === "instructors" && (
        <div className="grid grid-3">
          {instructors.map((ins) => (
            <div className="card instr-card" key={ins.id}>
              <div className="instr-avatar">{ins.initials}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700 }}>{ins.name}</div>
                <div style={{ fontSize: 11.5, color: "var(--steel)" }}>
                  {ins.specialty}
                </div>
                <div className="heat">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <span
                      key={i}
                      className={heatClass(ins.heat[i] || 0)}
                    ></span>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 10,
                    fontSize: 11.5,
                  }}
                >
                  <span>{ins.students} students</span>
                  <span className={`chip ${AVAIL_CHIP[ins.availability]}`}>
                    {ins.availability}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "fleet" && (
        <div className="grid grid-3">
          {vehicles.map((v) => (
            <div className="card" key={v.id}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <b>{v.name}</b>
                <span className={`chip ${VEHICLE_CHIP[v.status]}`}>
                  {v.status}
                </span>
              </div>
              <div
                style={{
                  fontSize: 11.5,
                  color: "var(--steel)",
                  margin: "6px 0 10px",
                }}
              >
                {v.transmission} · {v.km}
              </div>
              <div className="fuel-gauge">
                <div
                  className="fuel-fill"
                  style={{
                    width: `${v.fill}%`,
                    background: `var(--${v.color})`,
                  }}
                ></div>
              </div>
              <div
                style={{ fontSize: 11, color: "var(--steel)", marginTop: 5 }}
              >
                {v.note}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
