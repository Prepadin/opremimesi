'use client'
import { Home, Image, Settings, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'


export const LandingFeatures = () => {
  const features = [
    {
      icon: <Home className="w-12 h-12 text-purple-500" />,
      title: "Interior & Exterior Image Generation",
      description: "Pridobite ideje za okrasitev vsakega kotička vašega doma. Znotraj in zunaj.",
    },
    {
      icon: <Image className="w-12 h-12 text-blue-400" />,
      title: "High-Quality Images",
      description: "Prenesite slike, ustvarjene z umetno inteligenco, v kristalno čisti kakovosti.",
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-500" />,
      title: "Unlimited AI Ideas",
      description: "Uporabite umetno inteligenco Opremi Me za ustvarjanje neomejenih idej AI za vaš dom.",
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-400" />,
      title: "Fast Image Rendering",
      description: "Zagotovite si svojo prvo sliko, ustvarjeno z AI, v 60 sekundah ali manj.",
    },
  ]

  const { isSignedIn } = useAuth()

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        {/* <h2 className="text-purple-600 font-medium mb-4">CARATTERISTICHE PRIME SUL MERCATO</h2> */}
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-purple-600">Naš program je vse, kar potrebujete </span>
          <span className="text-white">Opremi Me AI </span>
          {/* <span className="text-purple-600">Attrezzo</span> */}
        </h1>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-gray-900 font-bold text-xl mb-3">{feature.title}</h3>
            <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-lg">
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
        Genera riprogettazioni IA
        </Link>
        </Button>
      </div>
    </section>
  )
}

