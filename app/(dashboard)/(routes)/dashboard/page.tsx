'use client'
import Lottie from "lottie-react";
import animationData from "@/public/assets/house1.json"
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

import { Card } from '@/components/ui/card'

import { TOOLS } from '@/constants'
import { cn } from '@/lib/utils'

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
        Opremi Svoj Sanjski Dom
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Pretvorite svoje oblikovalske zamisli v elegantno, profesionalno notranjost z našo umetno inteligenco.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {TOOLS.map(tool => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>

              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
        <div className="flex justify-center items-center">
      <Lottie style={{ width: '50%', height: '50%' }} animationData={animationData} />
    </div>
      </div>
    </div>
  )
}

export default DashboardPage
