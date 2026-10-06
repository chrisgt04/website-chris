import { useState } from "react";

const WEEKS_PER_MONTH = 4.33;
const money = (v) => `$${Math.round(v).toLocaleString("es-MX")}`;

function Slider({ label, value, min, max, step, onChange, format }) {
  return (
    <label className="cons-slider">
      <span className="cons-slider-head">
        <span>{label}</span>
        <b>{format(value)}</b>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

/** RoiCalculator — illustrative savings (automation) and return (ads). */
export default function RoiCalculator({ note }) {
  const [tab, setTab] = useState("auto");
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(250);
  const [pct, setPct] = useState(60);
  const [spend, setSpend] = useState(20000);
  const [roas, setRoas] = useState(3);

  const savedHours = hours * WEEKS_PER_MONTH * (pct / 100);
  const savedMoney = savedHours * rate;
  const revenue = spend * roas;

  return (
    <div className="cons-calc">
      <div className="cons-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "auto"}
          className={tab === "auto" ? "is-on" : ""}
          onClick={() => setTab("auto")}
        >
          🤖 Automatización
        </button>
        <button
          role="tab"
          aria-selected={tab === "ads"}
          className={tab === "ads" ? "is-on" : ""}
          onClick={() => setTab("ads")}
        >
          📣 Meta Ads
        </button>
      </div>

      {tab === "auto" ? (
        <div className="cons-calc-body">
          <div className="cons-calc-inputs">
            <Slider label="Horas manuales por semana (equipo)" value={hours} min={1} max={60} step={1} onChange={setHours} format={(v) => `${v} h`} />
            <Slider label="Costo por hora (MXN)" value={rate} min={80} max={1000} step={10} onChange={setRate} format={money} />
            <Slider label="% automatizable" value={pct} min={20} max={90} step={5} onChange={setPct} format={(v) => `${v}%`} />
          </div>
          <div className="cons-calc-out">
            <span className="cons-calc-big">{money(savedMoney)}</span>
            <span className="cons-calc-lab">ahorro estimado al mes</span>
            <span className="cons-calc-small">
              {Math.round(savedHours)} h/mes de vuelta · {money(savedMoney * 12)} al año
            </span>
          </div>
        </div>
      ) : (
        <div className="cons-calc-body">
          <div className="cons-calc-inputs">
            <Slider label="Inversión mensual en Meta Ads (MXN)" value={spend} min={5000} max={200000} step={5000} onChange={setSpend} format={money} />
            <Slider label="ROAS objetivo" value={roas} min={1} max={10} step={0.5} onChange={setRoas} format={(v) => `${v}x`} />
          </div>
          <div className="cons-calc-out">
            <span className="cons-calc-big">{money(revenue)}</span>
            <span className="cons-calc-lab">en ventas al mes</span>
            <span className="cons-calc-small">
              {money(revenue - spend)} de retorno neto sobre la pauta
            </span>
          </div>
        </div>
      )}
      <p className="cons-calc-note">{note}</p>
    </div>
  );
}
