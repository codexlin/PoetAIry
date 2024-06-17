"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const router = useRouter()
  const pathname = usePathname()
  const options: Option[] = [
    { country: "English", code: "en" },
    { country: "简体中文", code: "zh" },
    { country: "日本語", code: "ja" },
  ]
  const currentLang = pathname.split("/")[1]

  const setOption = (code: string) => {
    const paths = pathname.split("/")
    paths[1] = code
    const newPath = paths.join("/")
    // const currentPath = pathname ? pathname.split("/").slice(2).join("/") : ""
    // const newPath = `/${code}/${currentPath}`
    router.push(newPath)
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Icons.languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Icons.languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Lang Switcher</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {options.map((i) => (
            <DropdownMenuItem
              key={i.code}
              onClick={() => setOption(i.code)}
              className={currentLang === i.code ? "font-bold" : ""}
            >
              {i.country}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LangSwitcher
