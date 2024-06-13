import Link from "next/link"
import { useTranslations } from "next-intl"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import LangSwitcher from "@/components/lang-switcher"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  const t = useTranslations("General")
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="flex gap-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }))}
          >
            {t("start")}
          </Link>
          <ModeToggle />
          <LangSwitcher />
        </div>
      </div>
    </main>
  )
}
