type P = { className?: string };
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Arrow = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Dumbbell = ({ className = "h-9 w-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
    <rect x="4" y="10" width="4" height="12" rx="1" />
    <rect x="8" y="7" width="4" height="18" rx="1" />
    <rect x="20" y="7" width="4" height="18" rx="1" />
    <rect x="24" y="10" width="4" height="12" rx="1" />
    <path d="M12 16h8M2 16h2M28 16h2" />
  </svg>
);

export const Group = ({ className = "h-9 w-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
    <circle cx="16" cy="10" r="4" />
    <circle cx="7" cy="12" r="3" />
    <circle cx="25" cy="12" r="3" />
    <path d="M9 26v-2a7 7 0 0 1 14 0v2M2 25v-1a5 5 0 0 1 6-5M30 25v-1a5 5 0 0 0-6-5" />
  </svg>
);

export const Heart = ({ className = "h-9 w-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
    <path d="M16 27S4 20 4 11.5A6.5 6.5 0 0 1 16 8a6.5 6.5 0 0 1 12 3.5C28 20 16 27 16 27Z" />
    <path d="M16 12v8M12 16h8" />
  </svg>
);

export const Pin = ({ className = "h-9 w-9" }: P) => (
  <svg viewBox="0 0 32 32" className={className} {...base} aria-hidden="true">
    <path d="M16 28s-9-8.5-9-15a9 9 0 0 1 18 0c0 6.5-9 15-9 15Z" />
    <circle cx="16" cy="13" r="3.2" />
    <path d="M6 29h20" />
  </svg>
);

export const Instagram = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

export const Chat = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M4 20l1.4-4A8 8 0 1 1 9 19.5Z" />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base} strokeWidth={2.4} aria-hidden="true">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const featureIcons = { dumbbell: Dumbbell, group: Group, heart: Heart, pin: Pin };
