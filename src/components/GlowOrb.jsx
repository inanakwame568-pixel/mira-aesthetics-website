// Signature visual for the site: a soft, breathing gradient orb standing in
// for "the glow" — used instead of a stock photo in the hero. Pure SVG/CSS,
// no external image dependency.
export default function GlowOrb() {
  return (
    <div className="glow-orb" aria-hidden="true">
      <svg viewBox="0 0 480 480" className="glow-orb__svg">
        <defs>
          <radialGradient id="orbGradient" cx="42%" cy="38%" r="65%">
            <stop offset="0%" stopColor="#f4e3c9" />
            <stop offset="45%" stopColor="#d9b978" />
            <stop offset="78%" stopColor="#b98d46" />
            <stop offset="100%" stopColor="#1c3b30" />
          </radialGradient>
        </defs>
        <circle cx="240" cy="240" r="170" fill="url(#orbGradient)" className="glow-orb__core" />
        <circle
          cx="240"
          cy="240"
          r="205"
          fill="none"
          stroke="rgba(185,141,70,0.35)"
          strokeWidth="1"
          className="glow-orb__ring glow-orb__ring--1"
        />
        <circle
          cx="240"
          cy="240"
          r="230"
          fill="none"
          stroke="rgba(28,59,48,0.18)"
          strokeWidth="1"
          className="glow-orb__ring glow-orb__ring--2"
        />
      </svg>
    </div>
  )
}
