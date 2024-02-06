"use client"
import ThemeProvider from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

type Props = {
  children: React.ReactNode
}

const Providers = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  )
}
export default Providers
