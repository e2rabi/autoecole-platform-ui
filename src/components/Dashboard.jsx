const MONTHS = [
  { m: "Feb", enroll: 60, done: 74 },
  { m: "Mar", enroll: 70, done: 80 },
  { m: "Apr", enroll: 55, done: 66 },
  { m: "May", enroll: 88, done: 95 },
  { m: "Jun", enroll: 80, done: 110 },
  { m: "Jul", enroll: 96, done: 100 },
];

export default function Dashboard() {
  return (
    <section>
      <div className="grid grid-4">
        <div className="card kpi">
          <div
            className="ring"
            style={{
              background: "conic-gradient(var(--green) 0 78%, var(--line) 0)",
            }}
          >
            <span className="ring-val">78%</span>
          </div>
          <div>
            <div className="kpi-label">Pass rate (90d)</div>
            <div className="kpi-delta up">▲ 4.2% vs last period</div>
          </div>
        </div>
        <div className="card kpi">
          <div
            className="ring"
            style={{
              background: "conic-gradient(var(--amber) 0 64%, var(--line) 0)",
            }}
          >
            <span className="ring-val">64%</span>
          </div>
          <div>
            <div className="kpi-label">Fleet utilization</div>
            <div className="kpi-delta down">▼ 3% vs last week</div>
          </div>
        </div>
        <div className="card">
          <div className="kpi-num">$48.2k</div>
          <div className="kpi-label">Revenue — July (of $60k target)</div>
          <div className="odo" style={{ marginTop: 8 }}>
            <div
              className="odo-fill"
              style={{ width: "80%", background: "var(--yellow-deep)" }}
            ></div>
          </div>
        </div>
        <div className="card">
          <div className="kpi-num">214</div>
          <div className="kpi-label">Active students</div>
          <div className="kpi-delta up">▲ 11 new this week</div>
        </div>
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <div className="card" style={{ gridColumn: "span 2" }}>
          <div className="card-head">
            <div className="card-title">Enrollments vs. lessons completed</div>
            <div className="chip chip-blue">Last 6 months</div>
          </div>
          <div className="bars">
            {MONTHS.map((row) => (
              <div className="bar-col" key={row.m}>
                <div className="bar-track">
                  <div
                    className="bar"
                    style={{ height: row.enroll, background: "var(--asphalt)" }}
                  ></div>
                  <div
                    className="bar"
                    style={{ height: row.done, background: "var(--yellow)" }}
                  ></div>
                </div>
                <div className="bar-month">{row.m}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              fontSize: 11,
              color: "var(--steel)",
              marginTop: 10,
            }}
          >
            <span>■ New enrollments</span>
            <span style={{ color: "var(--yellow-deep)" }}>
              ■ Lessons completed (×10)
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <div className="card-title">Today at a glance</div>
          </div>
          <div className="activity">
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--yellow-deep)" }}
              ></div>
              <div>
                <div>
                  <b>18</b> driving lessons scheduled
                </div>
                <div className="activity-time">3 slots still open</div>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--blue)" }}
              ></div>
              <div>
                <div>
                  <b>6</b> theory sessions today
                </div>
                <div className="activity-time">Room A · 10:00</div>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--red)" }}
              ></div>
              <div>
                <div>
                  <b>4</b> overdue invoices
                </div>
                <div className="activity-time">$1,280 total outstanding</div>
              </div>
            </div>
            <div className="activity-item">
              <div
                className="activity-dot"
                style={{ background: "var(--green)" }}
              ></div>
              <div>
                <div>
                  <b>2</b> exam-ready students
                </div>
                <div className="activity-time">Road test eligible</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="lane-divider" />

      <div className="card">
        <div className="card-head">
          <div className="card-title">Recent activity</div>
        </div>
        <div className="activity">
          <div className="activity-item">
            <div
              className="activity-dot"
              style={{ background: "var(--green)" }}
            ></div>
            <div>
              <div>
                <b>Nora K.</b> completed lesson #14 with instructor Marc — 92%
                maneuver score
              </div>
              <div className="activity-time">14:20</div>
            </div>
          </div>
          <div className="activity-item">
            <div
              className="activity-dot"
              style={{ background: "var(--yellow-deep)" }}
            ></div>
            <div>
              <div>
                <b>Karim B.</b> booked a driving session for Thu 09:00
              </div>
              <div className="activity-time">13:05</div>
            </div>
          </div>
          <div className="activity-item">
            <div
              className="activity-dot"
              style={{ background: "var(--blue)" }}
            ></div>
            <div>
              <div>
                Invoice <span className="mono">#INV-2291</span> paid by{" "}
                <b>Léa Fabre</b> — $210
              </div>
              <div className="activity-time">11:42</div>
            </div>
          </div>
          <div className="activity-item">
            <div
              className="activity-dot"
              style={{ background: "var(--red)" }}
            ></div>
            <div>
              <div>
                Vehicle <b>Clio 3 (AB-482-CD)</b> flagged for upcoming service
              </div>
              <div className="activity-time">09:15</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
