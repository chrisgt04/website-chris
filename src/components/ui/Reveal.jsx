import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1];

/**
 * Reveal — fades + slides children in when scrolled into view.
 * `as` picks the motion element (div, p, span, h2…).
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 28,
  duration = 0.8,
  className,
  ...rest
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
