import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard - Jobify Dev",
}

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return children
}
export default Layout
