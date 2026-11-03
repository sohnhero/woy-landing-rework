/**
 * Sprite icon referencing the <symbol> defs in SvgDefs.
 * `decorative` adds aria-hidden, matching icons injected by the old app.js.
 */
export default function Icon({ name, decorative = false }) {
  return (
    <svg aria-hidden={decorative ? 'true' : undefined}>
      <use href={`#${name}`} />
    </svg>
  );
}

