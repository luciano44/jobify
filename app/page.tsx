"use client"
import { Archive } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Logo from "@/assets/logo.svg"
import Main from "@/assets/main.svg"
import Link from "next/link"
import { toast } from "sonner"

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
      <header>
        <Image src={Logo} alt="Logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job
            <span className="text-primary">tracking</span>
            app
          </h1>
          <p className="leading-loose max-w-md mt-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            illum minima, provident, aut dolorum optio mollitia odit neque
            officiis labore dolorem adipisci velit! Unde quo qui earum quibusdam
            quasi nulla.
          </p>
          <Button asChild className="mt-4 ">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={Main} alt="Main Image" className="hidden lg:block" />
      </section>
    </main>
  )
}
