import { PropsWithChildren } from "react"
import { Metadata } from "next"

import NavBar from "@/components/NavBar"
import SideBar from "@/components/SideBar"

export const metadata: Metadata = {
  title: "Dashboard - Jobify Dev",
}

function Layout({ children }: PropsWithChildren) {
  return (
    <main className="grid lg:grid-cols-5">
      {/* first-col hide in small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <SideBar />
      </div>

      {/* second-col hide dropdown on big screen */}
      <div className="lg:col-span-4">
        <NavBar />
        <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  )
}
export default Layout
