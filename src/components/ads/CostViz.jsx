// Visual "solo pagas cuando hay resultado" — comparación mes a mes. Reutilizable.
export default function CostViz({ data }) {
  return (
    <div className="ads-cost">
      <div className="ads-cost-months">
        <span />
        {data.months.map((m) => (
          <span className="ads-cost-month" key={m}>
            {m}
          </span>
        ))}
      </div>
      {data.rows.map((row) => (
        <div className={`ads-cost-row ${row.neo ? "is-neo" : ""}`} key={row.label}>
          <div className="ads-cost-legend">
            <span className="ads-cost-name">{row.label}</span>
            <span className="ads-cost-sub">{row.sublabel}</span>
          </div>
          {row.cells.map((c, i) => (
            <span
              key={i}
              className={`ads-cost-cell ${c.on ? "is-on" : "is-off"} ${
                row.neo ? "neo" : ""
              }`}
            >
              {c.tag}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
