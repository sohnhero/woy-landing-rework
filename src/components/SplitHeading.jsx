/**
 * Heading revealed line by line. Reproduces the exact markup the old
 * motion.js generated at runtime: one .split-line wrapper per line,
 * with a staggered --line-delay.
 */
export default function SplitHeading({ lines, as: Tag = 'h2' }) {
  return (
    <Tag>
      {lines.map((line, i) => (
        <span className="split-line" key={i}>
          <span style={{ '--line-delay': `${i * 0.1}s` }}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

