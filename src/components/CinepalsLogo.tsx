interface CinepalsLogoProps {
  className?: string;
  variant?: "default" | "icon";
}

export function CinepalsLogo({ className = "", variant = "default" }: CinepalsLogoProps) {
  // Icon only version - Detailed ticket shape
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Shadow/depth effect */}
        <rect x="12" y="21" width="36" height="22" rx="2" fill="#242A32" opacity="0.3" />
        
        {/* Main ticket body */}
        <rect x="10" y="18" width="40" height="22" rx="2" fill="#FBB343" />
        
        {/* Left side notches (two small ones) */}
        <circle cx="10" cy="24" r="2" fill="#242A32" />
        <circle cx="10" cy="34" r="2" fill="#242A32" />
        
        {/* Right side notches (two small ones) */}
        <circle cx="50" cy="24" r="2" fill="#242A32" />
        <circle cx="50" cy="34" r="2" fill="#242A32" />
        
        {/* Vertical perforation line */}
        <line x1="30" y1="20" x2="30" y2="22" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="24" x2="30" y2="26" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="28" x2="30" y2="30" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="32" x2="30" y2="34" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="36" x2="30" y2="38" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" />
        
        {/* Small decorative corner details */}
        <rect x="13" y="21" width="3" height="3" rx="0.5" fill="#242A32" opacity="0.2" />
        <rect x="44" y="21" width="3" height="3" rx="0.5" fill="#242A32" opacity="0.2" />
        <rect x="13" y="34" width="3" height="3" rx="0.5" fill="#242A32" opacity="0.2" />
        <rect x="44" y="34" width="3" height="3" rx="0.5" fill="#242A32" opacity="0.2" />
      </svg>
    );
  }

  // Full logo - IMDB style with detailed ticket
  return (
    <svg
      viewBox="0 0 220 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow effect */}
      <rect x="5" y="20" width="175" height="35" rx="3" fill="#242A32" opacity="0.2" />
      
      {/* Main ticket background */}
      <rect x="3" y="17" width="175" height="35" rx="3" fill="#FBB343" />
      
      {/* Top left notch */}
      <circle cx="3" cy="24" r="3.5" fill="#242A32" />
      {/* Bottom left notch */}
      <circle cx="3" cy="45" r="3.5" fill="#242A32" />
      
      {/* Top right notch */}
      <circle cx="178" cy="24" r="3.5" fill="#242A32" />
      {/* Bottom right notch */}
      <circle cx="178" cy="45" r="3.5" fill="#242A32" />
      
      {/* Decorative border lines */}
      <rect x="8" y="22" width="162" height="25" rx="1" fill="none" stroke="#242A32" strokeWidth="0.5" opacity="0.15" />
      
      {/* Left section - decorative stub */}
      <line x1="45" y1="19" x2="45" y2="21" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="23" x2="45" y2="25" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="27" x2="45" y2="29" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="31" x2="45" y2="33" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="35" x2="45" y2="37" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="39" x2="45" y2="41" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="43" x2="45" y2="45" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="45" y1="47" x2="45" y2="49" stroke="#242A32" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      
      {/* Small corner markers */}
      <rect x="10" y="23" width="4" height="4" rx="0.5" fill="#242A32" opacity="0.15" />
      <rect x="10" y="42" width="4" height="4" rx="0.5" fill="#242A32" opacity="0.15" />
      
      {/* CINEPALS text - bold black text */}
      <text
        x="110"
        y="42"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="22"
        fontWeight="900"
        letterSpacing="2"
        fill="#242A32"
        textAnchor="middle"
      >
        CINEPALS
      </text>
      
      {/* Small subtitle/tagline effect */}
      <line x1="75" y1="46" x2="145" y2="46" stroke="#242A32" strokeWidth="0.8" opacity="0.2" />
    </svg>
  );
}
