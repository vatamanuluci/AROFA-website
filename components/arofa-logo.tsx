import Image from "next/image"
import Link from "next/link"
import { localizeHref, type Locale } from "@/lib/i18n"

type ArofaLogoProps = {
  className?: string
  locale?: Locale
  size?: "header" | "footer"
}

export function ArofaLogo({ className = "", locale = "ro", size = "header" }: ArofaLogoProps) {
  const dimensions = size === "footer"
    ? { width: 116, height: 84, className: "h-[72px] w-[100px]" }
    : { width: 84, height: 60, className: "h-12 w-[67px]" }

  return (
    <Link href={localizeHref("/", locale)} className={`inline-flex shrink-0 items-center justify-center ${className}`} aria-label="AROFA">
      <Image
        src="/arofa-logo.png"
        alt="AROFA"
        width={dimensions.width}
        height={dimensions.height}
        priority={size === "header"}
        className={`${dimensions.className} object-contain`}
      />
    </Link>
  )
}
