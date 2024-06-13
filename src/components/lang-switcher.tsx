"use client"

import * as React from "react"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const router = useRouter()
  const pathname = usePathname()
  const options: Option[] = [
    { country: "English", code: "en" },
    { country: "Chinese", code: "zh" },
    { country: "Japanese", code: "ja" },
  ]
  const setOption = (code: string) => {
    router.push(`/${code}`)
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
            <DropdownMenuItem key={i.code} onClick={() => setOption(i.code)}>
              {i.country}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
export default LangSwitcher
