import { cn } from "@/lib/utils";

export default function DragonSpinner({
  size = 48,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={cn("animate-spin-slow text-foreground", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dragon body (stylized) */}
      <path
        d="M65 20
           C80 25, 85 45, 70 55
           C60 62, 55 72, 45 75
           C35 78, 28 70, 30 60
           C32 48, 45 45, 48 35
           C50 28, 55 22, 65 20Z"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dragon eye */}
      <circle cx="68" cy="28" r="2.5" fill="currentColor" />
    </svg>
  );
}
