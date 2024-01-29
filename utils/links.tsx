import { AreaChart, Layers, AppWindow } from "lucide-react"
import React from "react"

type NavLinks = {
  href: string
  label: string
  icon: React.ReactNode
}

export const links: NavLinks[] = [
  {
    href: "/add-job",
    label: "Add Job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart />,
  },
]
