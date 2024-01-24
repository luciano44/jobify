import Image from "next/image"
import { Archive } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button>Submit</Button>
      <Button variant="link" size="icon">
        <Archive />
      </Button>
    </div>
  )
}
