import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];
const view = { once: true, margin: "-60px" };

export const fmtMoney = (v) =>
  v >= 1000 ? `$${(v / 1000).toFixed(v >= 100000 ? 0 : 1)}k` : `$${v}`;

/**
 * HBars — horizontal bars that grow in when scrolled into view.
 * items: [{ label, value, accent? }]
 */
export function HBars({ items, prefix = "", suffix = "", format }) {
  const reduce = useReducedMotion();
  const max = Math.max(...items.map((i) => i.value)) || 1;
  const fmt = format || ((v) => `${prefix}${v.toLocaleString("es-MX")}${suffix}`);
  return (
    <motion.div
      className="cons-hbars"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={view}
    >
      {items.map((it, i) => (
        <div className="cons-hbar" key={it.label}>
          <span className="cons-hbar-lab">{it.label}</span>
          <div className="cons-hbar-track">
            <motion.div
              className={`cons-hbar-fill${it.accent ? " is-accent" : ""}`}
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
              transition={{ duration: 1, delay: i * 0.1, ease }}
              style={{ width: `${Math.max((it.value / max) * 100, 1.5)}%` }}
            />
          </div>
          <span className="cons-hbar-val">{fmt(it.value)}</span>
        </div>
      ))}
    </motion.div>
  );
}

/**
 * GroupedBars — vertical bars, one group per label, one bar per series.
 * groups: [{ label, values: [a, b] }], series: ["A", "B"]
 */
export function GroupedBars({ groups, series, format = fmtMoney }) {
  const reduce = useReducedMotion();
  const max = Math.max(...groups.flatMap((g) => g.values)) || 1;
  return (
    <div className="cons-vbars-wrap">
      <Legend names={series} />
      <motion.div
        className="cons-vbars"
        initial={reduce ? false : "hidden"}
        whileInView="show"
        viewport={view}
      >
        {groups.map((g, gi) => (
          <div className="cons-vbar-group" key={g.label}>
            <div className="cons-vbar-cols">
              {g.values.map((v, si) => (
                <div className="cons-vbar-col" key={si}>
                  <span className="cons-vbar-val">{format(v)}</span>
                  <motion.div
                    className={`cons-vbar s${si}`}
                    variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1 } }}
                    transition={{ duration: 0.9, delay: gi * 0.12 + si * 0.06, ease }}
                    style={{ height: `${(v / max) * 100}%` }}
                  />
                </div>
              ))}
            </div>
            <span className="cons-vbar-lab">{g.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * LineChart — SVG lines that draw in. series: [{ name, values, accent? }]
 */
export function LineChart({ labels, series, format = fmtMoney, height = 220 }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const [W, setW] = useState(560);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setW(Math.max(280, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const H = height;
  const pad = { t: 16, r: 16, b: 28, l: 52 };
  const all = series.flatMap((s) => s.values);
  const max = Math.max(...all) * 1.08 || 1;
  const x = (i) =>
    pad.l + (labels.length === 1 ? 0 : (i / (labels.length - 1)) * (W - pad.l - pad.r));
  const y = (v) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const ticks = [0, 0.5, 1].map((f) => max * f);
  const step = labels.length > 6 && W < 700 ? 2 : 1;

  return (
    <div className="cons-line-wrap" ref={wrapRef}>
      <Legend names={series.map((s) => s.name)} />
      <svg
        className="cons-line"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={series.map((s) => s.name).join(" vs ")}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line className="cons-grid" x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} />
            <text className="cons-axis" x={pad.l - 8} y={y(t) + 4} textAnchor="end">
              {format(Math.round(t))}
            </text>
          </g>
        ))}
        {labels.map((l, i) =>
          (labels.length - 1 - i) % step === 0 ? (
            <text key={l} className="cons-axis" x={x(i)} y={H - 8} textAnchor="middle">
              {l}
            </text>
          ) : null
        )}
        {series.map((s, si) => {
          const d = s.values.map((v, i) => `${i ? "L" : "M"}${x(i)},${y(v)}`).join(" ");
          return (
            <g key={s.name} className={`cons-series s${si}`}>
              <motion.path
                d={d}
                fill="none"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={view}
                transition={{ duration: 1.4, delay: si * 0.2, ease }}
              />
              {s.values.length <= 6 &&
                s.values.map((v, i) => (
                  <circle key={i} cx={x(i)} cy={y(v)} r="4.5">
                    <title>{`${s.name} · ${labels[i]}: ${format(v)}`}</title>
                  </circle>
                ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function Legend({ names }) {
  return (
    <div className="cons-legend">
      {names.map((n, i) => (
        <span key={n} className={`cons-legend-item s${i}`}>
          <i />
          {n}
        </span>
      ))}
    </div>
  );
}
