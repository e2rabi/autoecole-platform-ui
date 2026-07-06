import { invoices } from "../data/mockData";

export default function Finance() {
  return (
    <section>
      <div className="grid grid-4">
        <div className="card">
          <div className="kpi-num">$48.2k</div>
          <div className="kpi-label">Revenue this month</div>
        </div>
        <div className="card">
          <div className="kpi-num" style={{ color: "var(--red)" }}>
            $1,280
          </div>
          <div className="kpi-label">Overdue balance</div>
        </div>
        <div className="card">
          <div className="kpi-num">156</div>
          <div className="kpi-label">Active subscriptions</div>
        </div>
        <div className="card">
          <div className="kpi-num">$225</div>
          <div className="kpi-label">Avg. package value</div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 16, padding: 0 }}>
        <div style={{ padding: "18px 18px 0" }}>
          <div className="card-title">Invoices</div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Package</th>
              <th>Amount</th>
              <th>Due</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr className="row" key={inv.id}>
                <td>{inv.student}</td>
                <td>{inv.package}</td>
                <td className="mono">${inv.amount}</td>
                <td>{inv.due}</td>
                <td className={`invoice-status-${inv.status}`}>
                  ● {inv.status}
                </td>
                <td>
                  <button className="btn btn-ghost btn-sm">
                    {inv.status === "Paid" ? "View" : "Remind"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-3" style={{ marginTop: 16 }}>
        <div className="plan-card">
          <div className="card-title">Basic</div>
          <div className="plan-price">$180</div>
          <div style={{ fontSize: 12, color: "var(--steel)" }}>
            10h practical only
          </div>
        </div>
        <div className="plan-card featured">
          <div className="card-title">Standard</div>
          <div className="plan-price">$320</div>
          <div style={{ fontSize: 12, color: "var(--steel)" }}>
            20h + theory bundle
          </div>
        </div>
        <div className="plan-card">
          <div className="card-title">Premium</div>
          <div className="plan-price">$480</div>
          <div style={{ fontSize: 12, color: "var(--steel)" }}>
            30h + mock exams
          </div>
        </div>
      </div>
    </section>
  );
}
