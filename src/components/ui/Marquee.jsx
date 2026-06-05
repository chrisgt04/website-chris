/**
 * Marquee — infinite horizontal scroll. Items are duplicated so the
 * CSS translateX(-50%) loops seamlessly.
 */
export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
