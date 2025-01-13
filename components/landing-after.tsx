"use client"

import Image from 'next/image'
import { motion } from "framer-motion";
import { useState, useEffect } from 'react'

export const LandingAfter = () => {
  const [currentIndexImages, setCurrentIndexImages] = useState(0)
  const [currentIndexImages1, setCurrentIndexImages1] = useState(0)

  const images = [
    { src: "/kitchen.jpg?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/living2.jpg?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/dinning.jpg?height=300&width=200", alt: "Image 3", text: "Image 3" },
    { src: "/room4.jpg?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/liroom1.jpg?height=300&width=200", alt: "Image 5", text: "Image 5" },
  ]

  const images1 = [
    { src: "/kitchen-1.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/kitchen-2.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/kitchen-3.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/kitchen-4.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/livinglux3.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/living2-2.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/living2-3.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/living2-4.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/livinglux.png?height=300&width=200", alt: "Image 3", text: "Image 3" },
    { src: "/dinning-2.png?height=300&width=200", alt: "Image 3", text: "Image 3" },
    { src: "/dinning-3.png?height=300&width=200", alt: "Image 3", text: "Image 3" },
    { src: "/dinning-4.png?height=300&width=200", alt: "Image 3", text: "Image 3" },
    { src: "/room4lux.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/room4-1.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/room4-2.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/room4-3.png?height=300&width=200", alt: "Image 4", text: "Image 4" },
    { src: "/liroom1-1.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/liroom1-2.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/liroom1-3.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
    { src: "/liroom1-4.png?height=300&width=200", alt: "Image 5", text: "Image 5" },
  ]

  useEffect(() => {
    const intervalImages = setInterval(() => {
      setCurrentIndexImages((prevIndex) => (prevIndex + 1) % images.length)
    }, 8000) // Slower interval for `images`

    const intervalImages1 = setInterval(() => {
      setCurrentIndexImages1((prevIndex) => (prevIndex + 1) % images1.length)
    }, 2000) // Faster interval for `images1`

    return () => {
      clearInterval(intervalImages)
      clearInterval(intervalImages1)
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Vaš osebni <span className="text-blue-500">AI</span><br />
            notranji oblikovalec
          </h1>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex">
              <div className="w-1/2 pr-2">
                <motion.div
                  key={currentIndexImages}
                  initial={{ opacity: 0, rotateY: -180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 180 }}
                  transition={{ duration: 0.5 }}>
                  <Image
                    src={images[currentIndexImages].src}
                    alt={images[currentIndexImages].alt}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
                <div className="mt-2 text-center text-gray-600 font-semibold">Pred</div>
              </div>
              <div className="w-1/2 pl-2">
                <motion.div
                  key={currentIndexImages1}
                  initial={{ opacity: 0, rotateY: -180 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 180 }}
                  transition={{ duration: 0.5 }}>
                  <Image
                    src={images1[currentIndexImages1].src}
                    alt={images1[currentIndexImages1].alt}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                </motion.div>
                <div className="mt-2 text-center text-gray-600 font-semibold">Potem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}