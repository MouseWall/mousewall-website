import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

/**
 * Brand logo. `full` renders the vertical lockup (public/logo.png);
 * `mark` renders the mouse-and-brick mark only (public/icon.png).
 * Display size is controlled by CSS on the wrapping class.
 */
export function Logo({
  className,
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "mark";
}) {
  const src = variant === "mark" ? "/icon.png" : "/logo.png";
  const dims =
    variant === "mark"
      ? { width: 1024, height: 1024 }
      : { width: 2083, height: 1768 };

  return (
    <Link href="/" className={className} aria-label={`${site.name} — home`}>
      <Image
        src={src}
        alt={`${site.legalName} logo`}
        width={dims.width}
        height={dims.height}
        priority
      />
    </Link>
  );
}
