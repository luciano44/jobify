import { AreaChart, Layers, AppWindow } from "lucide-react"
import React from "react"

type NavLinks = {
  href: string
  label: string
  icon: React.ReactNode
}

const links: NavLinks[] = [
  {
    href: "/add-job",
    label: "Add Job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "Add Job",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "Add Job",
    icon: <AreaChart />,
  },
]
