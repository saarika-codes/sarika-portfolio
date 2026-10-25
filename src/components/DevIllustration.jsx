// Original flat-style illustration — a generic "developer at laptop"
// scene built from basic shapes, not copied from any reference image.
// Swap for a real photo/illustration by replacing this component's
// usage in About.jsx if you'd prefer.

export default function DevIllustration() {
  return (
    <svg viewBox="0 0 420 420" className="w-full h-auto" role="img" aria-label="Illustration of a developer working at a laptop">
      <circle cx="210" cy="210" r="200" fill="#E3F7F5" />
      <circle cx="330" cy="90" r="26" fill="#FFE9E5" />
      <circle cx="70" cy="330" r="18" fill="#FFE9E5" />

      {/* floating tech chips */}
      <g fontFamily="Roboto, sans-serif" fontWeight="700" fontSize="13">
        <rect x="30" y="70" width="64" height="30" rx="8" fill="#FFFFFF" />
        <text x="62" y="90" textAnchor="middle" fill="#FF6A55">JS</text>

        <rect x="316" y="230" width="72" height="30" rx="8" fill="#FFFFFF" />
        <text x="352" y="250" textAnchor="middle" fill="#0EA89E">React</text>

        <rect x="40" y="260" width="76" height="30" rx="8" fill="#FFFFFF" />
        <text x="78" y="280" textAnchor="middle" fill="#171B26">CSS3</text>
      </g>

      {/* desk */}
      <rect x="90" y="300" width="240" height="14" rx="7" fill="#171B26" />

      {/* laptop base */}
      <rect x="140" y="270" width="140" height="34" rx="6" fill="#1B1E2B" />
      {/* laptop screen */}
      <rect x="150" y="170" width="120" height="100" rx="8" fill="#171B26" />
      <rect x="158" y="178" width="104" height="84" rx="4" fill="#0EA89E" />
      <rect x="166" y="188" width="60" height="6" rx="3" fill="#E3F7F5" />
      <rect x="166" y="200" width="80" height="6" rx="3" fill="#E3F7F5" opacity="0.8" />
      <rect x="166" y="212" width="40" height="6" rx="3" fill="#FF6A55" />
      <rect x="166" y="224" width="70" height="6" rx="3" fill="#E3F7F5" opacity="0.6" />

      {/* chair */}
      <rect x="188" y="150" width="44" height="10" rx="5" fill="#FF6A55" />

      {/* person torso */}
      <rect x="178" y="160" width="64" height="90" rx="26" fill="#0EA89E" />
      {/* head */}
      <circle cx="210" cy="140" r="30" fill="#F3C9A0" />
      {/* hair */}
      <path d="M180 132c0-22 18-38 30-38s30 16 30 38c0-6-6-10-12-8-4-10-14-16-18-16s-14 6-18 16c-6-2-12 2-12 8Z" fill="#171B26" />
      {/* glasses */}
      <rect x="188" y="140" width="18" height="10" rx="5" fill="none" stroke="#171B26" strokeWidth="3" />
      <rect x="214" y="140" width="18" height="10" rx="5" fill="none" stroke="#171B26" strokeWidth="3" />
      <line x1="206" y1="145" x2="214" y2="145" stroke="#171B26" strokeWidth="3" />

      {/* arms typing */}
      <rect x="160" y="195" width="34" height="12" rx="6" fill="#F3C9A0" />
      <rect x="226" y="195" width="34" height="12" rx="6" fill="#F3C9A0" />
    </svg>
  );
}
