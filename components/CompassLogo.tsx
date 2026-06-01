type Props = {
  size?: number;
  className?: string;
  /** Forcer une couleur unique (utile pour un watermark blanc, etc.) */
  color?: string;
  /** Variante secondaire (pour les flèches accent). Si absente, on dérive de `color`. */
  accentColor?: string;
};

export default function CompassLogo({ size = 60, className, color, accentColor }: Props) {
  const main = color ?? "#c9a55a";
  const accent = accentColor ?? color ?? "#b8903a";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="30" cy="30" r="28" fill="none" stroke={main} strokeWidth="1" />
      <polygon points="30,2 33,28 30,32 27,28" fill={main} />
      <polygon points="30,58 33,32 30,28 27,32" fill={accent} />
      <polygon points="2,30 28,27 32,30 28,33" fill={accent} />
      <polygon points="58,30 32,27 28,30 32,33" fill={main} />
      <polygon points="9,9 27,27 30,24 26,26" fill={main} opacity="0.7" />
      <polygon points="51,9 33,27 30,24 34,26" fill={main} opacity="0.7" />
      <polygon points="9,51 27,33 30,36 26,34" fill={main} opacity="0.7" />
      <polygon points="51,51 33,33 30,36 34,34" fill={main} opacity="0.7" />
      <circle cx="30" cy="30" r="3" fill={main} />
    </svg>
  );
}
